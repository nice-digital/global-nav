/**
 * PropTypes validator for `awsWafScriptURL`: a script URL, `false` to switch the challenge off, or
 * left out. Not `PropTypes.bool`, because `true` has no meaning and would be loaded as the URL `/true`
 *
 * @see loadAwsWafChallenge
 */
export const awsWafScriptURLPropType = function (
	props,
	propName,
	componentName
) {
	const value = props[propName];

	if (value === undefined || value === false || typeof value === "string") {
		return null;
	}

	return new Error(
		`Invalid prop \`${propName}\` of value \`${value}\` supplied to \`${componentName}\`, expected a string, \`false\` or \`undefined\`.`
	);
};
