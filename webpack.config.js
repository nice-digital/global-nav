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
			// To polyfill for ES3 browsers e.g. IE8
			// We can remove this when we drop IE8 support
			"global-nav.ie8": "./polyfill",
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
								importLoaders: 2,
								modules: {
									auto: true,
									localIdentHashPrefix: "global-nav",
									localIdentName: isDevelopment
										? "[name]__[local]--[hash:base64]"
										: "gn_[hash:base64:5]",
								},
								sourceMap: isDevelopment,
							},
						},
						{
							loader: "postcss-loader",
							options: { sourceMap: true },
						},
						{
							loader: "sass-loader",
							options: {
								// See https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0
								// if you want to edit SASS in Chrome DevTools
								sourceMap: true,
								sassOptions: {
									includePaths: ["./src/scss"],
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
			].concat(
				HOT
					? []
					: {
							// Use es3ify loader to support IE8 by changing something.default to something["default"] etc
							// We can remove this when we drop support for IE8
							test: /\.jsx?$/,
							enforce: "post",
							use: "es3ify-loader",
					  }
			),
		},

		plugins: [
			HOT && new ReactRefreshWebpackPlugin(),
			new ESLintPlugin(),
			new StyleLintPlugin(),
			// Add a ponyfill for Promise/fetch implementation in IE 8/9+
			// Ponyfill rather than polyfill to avoid polluting global scope
			new webpack.ProvidePlugin({
				Promise: "promise-polyfill",
				fetch: "unfetch",
			}),

			new HtmlWebpackPlugin({
				template: "./../examples/index.html",
				minify: { collapseWhitespace: true },
				// Exlucde the IE8 bundle from outputting in the HTML file.
				// This is so that we can manually include it in a conditional comment.
				excludeChunks: ["global-nav.ie8"],
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
						// Exlucde the IE8 bundle from outputting in the HTML file.
						// This is so that we can manually include it in a conditional comment.
						excludeChunks: ["global-nav.ie8"],
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
