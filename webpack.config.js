const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExcludeAssetsPlugin = require("html-webpack-exclude-assets-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const HOT = process.env.HOT !== "false";

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: {
		tophat: "./index.js",
		// To polyfill for ES3 browsers e.g. IE8
		// We can remove this when we drop IE8 support
		"tophat.ie8": "es5-polyfill"
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
			react: "nervjs",
			"react-dom": "nervjs"
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
				test: /\.jsx?$/,
				enforce: "post",
				use: "es3ify-loader"
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: 1,
							hashPrefix: "tophat",
							localIdentName: "th_[hash:base64:5]",
							sourceMap: ENV === "development"
						}
					},
					{
						loader: "sass-loader",
						options: {
							// See https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0
							// if you want to edit SASS in Chrome DevTools
							sourceMap: ENV === "development",
							includePaths: ["./src/scss"]
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
					}
				]
			}
		]
	},

	plugins: [
		new StyleLintPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(ENV)
		}),
		new HtmlWebpackPlugin({
			template: "./index.html",
			minify: { collapseWhitespace: true },
			// TODO: Why do we do this?
			excludeAssets: [/ie/]
		}),
		new HtmlWebpackExcludeAssetsPlugin()
	],

	optimization: {
		minimize: false
	},

	stats: { colors: true },

	devtool: "cheap-module-eval-source-map",

	devServer: {
		port: process.env.PORT || 8080,
		host: "0.0.0.0",
		publicPath: "/",
		contentBase: "./src",
		historyApiFallback: true,
		open: true,
		openPage: "",
		useLocalIp: true,
		// hot: false and inline: false to support IE8 in dev mode.
		// These can be set to true when we add IE8 support
		hot: HOT,
		inline: HOT
	}
};
