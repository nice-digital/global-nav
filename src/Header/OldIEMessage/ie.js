// See https://gist.github.com/padolsey/527683#gistcomment-768383
export const getIEVersion = () => {
	if (typeof document === "undefined") return void 0;
	let tmp = (document["documentMode"] || document.attachEvent) && "ev",
		msie =
			tmp &&
			(tmp = window[tmp + "al"]) &&
			tmp("/*@cc_on 1;@*/") &&
			+((/msie (\d+)/i.exec(navigator.userAgent) || [])[1] || 0);
	return msie || void 0;
};
