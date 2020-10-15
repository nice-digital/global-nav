// A fake implemention of React Hot Loader (RHL), following the same API.
// We do this because IE8 doesn't play nicely with RHL, and we're using Nerv.
//
// E.g. replaces the following:
//
//	import { hot } from "react-hot-loader/root";
// 	export default hot(Header);
export const hot = function (component) {
	return component;
};
