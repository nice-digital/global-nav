module.exports = {
	parser: "babel-eslint",
	extends: [
		"@nice-digital/eslint-config/es6",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"prettier/react",
		"prettier/standard"
	],
	plugins: ["jsx-a11y"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true
		}
	},
	env: {
		es6: true,
		jest: true
	},
	settings: {
		react: {
			version: "16"
		}
	},
	overrides: [
		{
			files: ["**.test.js"],
			env: {
				jest: true,
				browser: true
			}
		}
	]
};
