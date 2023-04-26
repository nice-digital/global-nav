module.exports = function (api) {
	api.cache.using(() => process.env.NODE_ENV);

	return {
		presets: [
			"@babel/preset-env",
			[
				"@babel/preset-react",
				{ development: !api.env("production"), runtime: "automatic" },
			],
		],
		plugins: [
			// Including helpers from plugin-transform-runtime saves ~3Kb from minified bundle size
			"@babel/plugin-transform-runtime",
		],
		...(api.env("development") && { plugins: ["react-refresh/babel"] }),
	};
};
