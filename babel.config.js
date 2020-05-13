module.exports = function(api) {
	api.cache.using(() => process.env.NODE_ENV);

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					spec: true,
					useBuiltIns: false,
					loose: true,
					modules: "commonjs"
				}
			],
			"@babel/preset-react"
		],
		plugins: [
			// Plugins to support ES3 syntax for IE8. These can be removed when we drop IE8 support.
			"@babel/plugin-transform-member-expression-literals",
			"@babel/plugin-transform-property-literals",
			"@babel/plugin-transform-reserved-words",
			// Including helpers from plugin-transform-runtime saves ~3Kb from minified bundle size
			"@babel/plugin-transform-runtime"
		]
	};
};
