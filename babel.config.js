module.exports = function (api) {
	api.cache.using(() => process.env.NODE_ENV);

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					spec: true,
					useBuiltIns: false,
					loose: true,
					modules: "commonjs",
				},
			],
			"@babel/preset-react",
		],
		plugins: [
			// Including helpers from plugin-transform-runtime saves ~3Kb from minified bundle size
			"@babel/plugin-transform-runtime",
		],
	};
};
