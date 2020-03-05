const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExcludeAssetsPlugin = require("html-webpack-exclude-assets-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const path = require("path");
const fs = require("fs");

const examples = require("./examples/examples.js");

const ENV = process.env.NODE_ENV || "development";
const HOT = process.env.HOT !== "false";

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: {
		"global-nav": "./cdn.js",
		// To polyfill for ES3 browsers e.g. IE8
		// We can remove this when we drop IE8 support
		"global-nav.ie8": "./polyfill"
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "[name].js"
	},

	mode: "development",

	resolve: {
		mainFields: ["browser", "main"],
		modules: [
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "node_modules"),
			"node_modules"
		],
		alias: {
			react: HOT ? "react" : "nervjs",
			"react-dom": HOT ? "@hot-loader/react-dom" : "nervjs",
			"react-hot-loader": HOT
				? "react-hot-loader"
				: path.resolve(__dirname, "./fake-react-hot-loader")
		}
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				enforce: "pre",
				use: "source-map-loader"
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: "eslint-loader",
				resolve: { extensions: [".js", ".jsx"] }
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: "babel-loader",
				resolve: { extensions: [".js", ".jsx"] }
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								hashPrefix: "global-nav",
								localIdentName:
									ENV === "development"
										? "[name]__[local]--[hash:base64]"
										: "gn_[hash:base64:5]"
							},
							sourceMap: ENV === "development"
						}
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							plugins: [
								require("autoprefixer")(),
								// Generate pixel fallbacks for IE8 (and pseudos in 9/10)
								// See https://caniuse.com/#feat=rem
								require("pixrem")({ html: false, atrules: true })
							]
						}
					},
					{
						loader: "sass-loader",
						options: {
							// See https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0
							// if you want to edit SASS in Chrome DevTools
							sourceMap: ENV === "development",
							sassOptions: {
								includePaths: ["./src/scss"],
								outputStyle: "compressed"
							}
						}
					}
				]
			}
		].concat(
			HOT
				? []
				: {
						// Use es3ify loader to support IE8 by changing something.default to something["default"] etc
						// We can remove this when we drop support for IE8
						test: /\.jsx?$/,
						enforce: "post",
						use: "es3ify-loader"
				  }
		)
	},

	plugins: [
		new StyleLintPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(ENV)
		}),
		// Add a ponyfill for Promise/fetch implementation in IE 8/9+
		// Ponyfill rather than polyfill to avoid polluting global scope
		new webpack.ProvidePlugin({
			Promise: "promise-polyfill",
			fetch: "unfetch"
		}),

		new HtmlWebpackPlugin({
			template: "./../examples/index.html",
			minify: { collapseWhitespace: true },
			// Exlucde the IE8 bundle from outputting in the HTML file.
			// This is so that we can manually include it in a conditional comment.
			excludeAssets: [/ie/],
			global_nav_config: {
				header: {
					search: false,
					cookie: false
				}
			},
			examples: examples
		})
		//new HtmlWebpackExcludeAssetsPlugin()
	]
		.concat(
			examples.map(example => {
				const bodyHtml = fs.readFileSync(
					"./examples/body-html/" + example.filename + ".body.html",
					"utf8"
				);

				return new HtmlWebpackPlugin({
					template: "./../examples/example.html",
					// Exlucde the IE8 bundle from outputting in the HTML file.
					// This is so that we can manually include it in a conditional comment.
					excludeAssets: [/ie/],
					filename: example.filename + ".html",
					title: example.title,
					body: bodyHtml,
					bodyClasses: example.bodyClasses,
					global_nav_config: example.global_nav_config
				});
			})
		)
		.concat([new HtmlWebpackExcludeAssetsPlugin()]),

	cache: true,

	optimization: {
		minimize: false
	},

	stats: { colors: true },

	// Eval sourcemaps don't play nicely with IE8 (because es3ify doesn't work on
	// strings and we still have code like something.default which breaks IE8).
	// When we drop support for IE8 then we can revert to just using eval sourcemaps.
	devtool: HOT ? "eval" : false,

	devServer: {
		port: process.env.PORT || 8080,
		host: "0.0.0.0",
		publicPath: "/",
		contentBase: path.join(__dirname, "examples/assets"),
		historyApiFallback: true,
		open: true,
		openPage: "",
		useLocalIp: true,
		// hot: false and inline: false to support IE8 in dev mode.
		// These can be set to true when we add IE8 support
		hot: HOT,
		inline: HOT,
		proxy: {
			// For mimicking niceorg autocomplete endpoint
			"/niceorg": {
				target: "https://www.nice.org.uk",
				secure: false,
				changeOrigin: true,
				pathRewrite: { "^/niceorg": "" }
			},
			// For mimicking niceorg autocomplete endpoint
			"/evidence": {
				target: "https://www.evidence.nhs.uk/",
				secure: false,
				changeOrigin: true,
				pathRewrite: { "^/evidence": "" }
			},
			// For mimicking BNFC autocomplete endpoint
			"/bnfc": {
				target: "https://bnfc.nice.org.uk",
				secure: false,
				changeOrigin: true,
				pathRewrite: { "^/bnfc": "" }
			},
			// For mimicking BNF autocomplete endpoint
			"/bnf": {
				target: "https://bnf.nice.org.uk",
				secure: false,
				changeOrigin: true,
				pathRewrite: { "^/bnf": "" }
			},
			// For mimicking CKS autocomplete topics
			"/js/topics.txt": {
				target: "https://cks.nice.org.uk",
				secure: false,
				changeOrigin: true
			}
		}
	}
};
