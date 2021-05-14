const webpack = require("webpack");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const pkg = require("./package.json");

module.exports = function (env, argv) {
	// Workaround (https://github.com/webpack/webpack-cli/issues/1932#issuecomment-707865474)
	// Until this PR is released: https://github.com/webpack/webpack-cli/pull/1939
	env = Object.keys(env).reduce((acc, cur) => {
		const [key, value] = cur.split("=");
		acc[key] = value || env[key];
		return acc;
	}, {});

	const baseConfig = require("./webpack.config")(env, argv);

	const commonConfig = {
		resolve: {
			alias: {
				react: "nervjs",
				"react-dom": "nervjs",
			},
		},

		devtool: "source-map",

		plugins: [
			new webpack.BannerPlugin({
				banner: [
					`NICE Global Nav ${env.version || pkg.version} | ${
						new Date().toISOString().split("T")[0]
					}`,
					`© Copyright NICE 2015-${new Date().getFullYear()}`,
					"Licensed under MIT (https://github.com/nice-digital/global-nav/blob/master/LICENSE)",
				].join("\n"),
			}),
		],
	};

	return [
		merge(baseConfig, commonConfig, {
			mode: "production",
			devtool: "source-map",
			plugins: [
				new CleanWebpackPlugin(),
				// Fake out autocomplete endpoints so we can have a static site
				new CopyPlugin({
					patterns: [
						{ from: "../examples/assets/cks-topics.json", to: "js/topics.txt" },
						{
							from: "../examples/assets/autocomplete.response.json",
							to: "niceorg/autocomplete/index.html",
						},
						{
							from: "../examples/assets/autocomplete.response.json",
							to: "evidence/autocomplete/index.html",
						},
						{
							from: "../examples/assets/autocomplete.response.json",
							to: "bnf/typeahead/index.html",
						},
						{
							from: "../examples/assets/autocomplete.response.json",
							to: "bnfc/typeahead/index.html",
						},
					],
				}),
			],
		}),
		merge(baseConfig, commonConfig, {
			mode: "production",
			devtool: "source-map",
			output: {
				filename: "[name].min.js",
			},
			optimization: {
				minimize: true,
				minimizer: [
					// Custom minimizer so we can uglify with support for IE8.
					// We can remove this and revert to the default webpack production
					// minifier when we drop IE8 support
					new TerserPlugin({
						terserOptions: {
							ie8: true,
						},
						include: /\.min\.js$/,
					}),
				],
			},
		}),
	];
};
