import { useEffect } from "react";

import { loadAwsWafChallenge } from "../aws-waf";

/**
 * Loads the AWS WAF JavaScript SDK once the component has mounted, so never on the server.
 *
 * @param {string | false} [scriptURL] See `loadAwsWafChallenge`
 */
export const useAwsWafChallenge = (scriptURL) => {
	useEffect(() => {
		loadAwsWafChallenge(scriptURL);
	}, [scriptURL]);
};
