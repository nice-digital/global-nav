const toDataQASelAttr = (attrValue) => `[data-qa-sel='${attrValue}']`;
const toNthChildAttr = (attrValue) => `.CommentBox:nth-child(${attrValue})`;
const onlyToNthChildAttr = (attrValue) => `:nth-child(${attrValue})`;
const toChildAndQASel = (childIndex, attrValue) =>
	toNthChildAttr(childIndex) + " " + toDataQASelAttr(attrValue);
const toQAselAndChild = (attrValue, childIndex) =>
	toDataQASelAttr(attrValue) + " > li" + onlyToNthChildAttr(childIndex) + " a";
export default {
	guidanceListPage: {
		headerMenu: ".Nav_wrapper__v4w2g",
		guidanceNav: "#navlink-guidance",
		standardsAnIndicatorsNav: "#navlink-standards-and-indicators",
		lifeSciencesNav: "#navlink-life-sciences",
		bnfNav: "#navlink-bnf",
		bnfcNav: "#navlink-bnfc",
		cksNav: "#navlink-cks",
		aboutNav: "#navlink-about",
	},

};
