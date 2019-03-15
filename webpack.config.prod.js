const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = require("./webpack.config");
const pkg = require("./package.json");

const commonConfig = {
	resolve: {
		alias: {
			react: "nervjs",
			"react-dom": "nervjs"
		}
	},

	devtool: "source-map",

	mode: "production",

	plugins: [
		new webpack.BannerPlugin({
			banner: [
				`NICE Global Nav ${pkg.version} | ${
					new Date().toISOString().split("T")[0]
				}`,
				`© Copyright NICE 2015-${new Date().getFullYear()}`,
				"Licensed under MIT (https://github.com/nhsevidence/global-nav/blob/master/LICENSE)"
			].join("\n")
		})
	]
};

module.exports = [
	merge(baseConfig, commonConfig, {
		plugins: [
			new CleanWebpackPlugin("dist"),
			// Fake out autocomplete endpoints so we can have a static site
			new CopyPlugin([
				{ from: "../examples/assets/cks-topics.json", to: "js/topics.txt" },
				{
					from: "../examples/assets/autocomplete.response.json",
					to: "niceorg/autocomplete/index.html"
				},
				{
					from: "../examples/assets/autocomplete.response.json",
					to: "evidence/autocomplete/index.html"
				},
				{
					from: "../examples/assets/autocomplete.response.json",
					to: "bnf/typeahead/index.html"
				},
				{
					from: "../examples/assets/autocomplete.response.json",
					to: "bnfc/typeahead/index.html"
				}
			])
		]
	}),
	merge(baseConfig, commonConfig, {
		output: {
			filename: "[name].min.js"
		},
		optimization: {
			minimize: true,
			minimizer: [
				// Custom minimizer so we can uglify with support for IE8.
				// We can remove this and revert to the default webpack production
				// minifier when we drop IE8 support
				new UglifyJsPlugin({
					cache: true,
					parallel: true,
					uglifyOptions: {
						compress: false,
						beautify: true,
						mangle: false,
						ie8: true
					},
					sourceMap: true,
					include: /\.min\.js$/
				})
			]
		}
	})
];
