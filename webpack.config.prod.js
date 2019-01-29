const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const baseConfig = require("./webpack.config");
const pkg = require("./package.json");

const commonConfig = {
	devtool: "source-map",

	mode: "production",

	plugins: [
		new webpack.BannerPlugin({
			banner: [
				`NICE TopHat ${pkg.version} | ${
					new Date().toISOString().split("T")[0]
				}`,
				`© Copyright NICE 2015-${new Date().getFullYear()}`,
				"Licensed under MIT (https://github.com/nhsevidence/nice.tophat/blob/master/LICENSE)"
			].join("\n")
		})
	]
};

module.exports = [
	merge(baseConfig, commonConfig, {
		plugins: [new CleanWebpackPlugin("dist")]
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
