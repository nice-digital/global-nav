const webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ESLintPlugin = require("eslint-webpack-plugin"),
	StyleLintPlugin = require("stylelint-webpack-plugin"),
	ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"),
	path = require("path"),
	fs = require("fs");

const examples = require("./examples/examples.js");

const ENV = process.env.NODE_ENV || "development",
	HOT = ENV === "development" && process.env.HOT !== "false";

module.exports = function (env, argv) {
	const mode = argv.mode,
		isDevelopment = mode === "development";

	return {
		context: path.resolve(__dirname, "src"),
		entry: {
			"global-nav": "./cdn.js",
		},

		output: {
			path: path.resolve(__dirname, "dist"),
			publicPath: "/",
			filename: "[name].js",
		},

		mode,

		resolve: {
			mainFields: ["browser", "main"],
			modules: [
				path.resolve(__dirname, "src"),
				path.resolve(__dirname, "node_modules"),
				"node_modules",
			],
		},

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					enforce: "pre",
					use: "source-map-loader",
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: require.resolve("babel-loader"),
							options: {
								plugins: [isDevelopment && "react-refresh/babel"].filter(
									Boolean
								),
							},
						},
					],
					resolve: { extensions: [".js", ".jsx"] },
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
									auto: true,
									localIdentName: isDevelopment
										? "[name]__[local]--[hash:base64]"
										: "gn_[hash:base64:5]",
								},
								sourceMap: isDevelopment,
							},
						},
						{
							loader: "postcss-loader",
							options: { sourceMap: isDevelopment },
						},
						{
							loader: "sass-loader",
							options: {
								// See https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0
								// if you want to edit SASS in Chrome DevTools
								sourceMap: isDevelopment,
								sassOptions: {
									outputStyle: "compressed",
								},
							},
						},
					],
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: ["file-loader"],
				},
			],
		},

		plugins: [
			HOT && new ReactRefreshWebpackPlugin(),
			new ESLintPlugin(),
			new StyleLintPlugin(),
			// Add a ponyfill for Promise/fetch implementation in IE 11
			// Ponyfill rather than polyfill to avoid polluting global scope
			new webpack.ProvidePlugin({
				Promise: "promise-polyfill",
				// Direct path to unfetch because of this: https://github.com/developit/unfetch/pull/164#issuecomment-1426069180
				fetch: path.resolve(__dirname, "node_modules/unfetch/dist/unfetch.mjs"),
			}),

			new HtmlWebpackPlugin({
				template: "./../examples/index.html",
				minify: { collapseWhitespace: true },
				templateParameters: {
					global_nav_config: {
						header: {
							search: false,
							cookie: false,
						},
					},
					examples: examples,
				},
			}),
		]
			.concat(
				examples.map(({ filename, title, bodyClasses, global_nav_config }) => {
					const body = fs.readFileSync(
						`./examples/body-html/${filename}.body.html`,
						"utf8"
					);

					return new HtmlWebpackPlugin({
						template: "./../examples/example.html",
						filename: filename + ".html",
						title,
						templateParameters: {
							body,
							bodyClasses,
							global_nav_config,
						},
					});
				})
			)
			.filter(Boolean),

		cache: true,

		optimization: {
			minimize: false,
		},

		stats: { colors: true },

		devtool: "eval",

		devServer: {
			port: process.env.PORT || 8080,
			host: "local-ip",
			static: {
				publicPath: "/",
				directory: path.join(__dirname, "examples/assets"),
			},
			historyApiFallback: true,
			open: true,
			//openPage: "",
			hot: true,
			proxy: {
				// For mimicking niceorg autocomplete endpoint
				"/niceorg": {
					target: "https://www.nice.org.uk",
					secure: false,
					changeOrigin: true,
					pathRewrite: { "^/niceorg": "" },
				},
				// For mimicking niceorg autocomplete endpoint
				"/evidence": {
					target: "https://www.evidence.nhs.uk/",
					secure: false,
					changeOrigin: true,
					pathRewrite: { "^/evidence": "" },
				},
				// For mimicking BNFC autocomplete endpoint
				"/bnfc": {
					target: "https://bnfc.nice.org.uk",
					secure: false,
					changeOrigin: true,
					pathRewrite: { "^/bnfc": "" },
				},
				// For mimicking BNF autocomplete endpoint
				"/bnf": {
					target: "https://bnf.nice.org.uk",
					secure: false,
					changeOrigin: true,
					pathRewrite: { "^/bnf": "" },
				},
				// For mimicking CKS autocomplete topics
				"/js/topics.txt": {
					target: "https://cks.nice.org.uk",
					secure: false,
					changeOrigin: true,
				},
			},
		},
	};
};
