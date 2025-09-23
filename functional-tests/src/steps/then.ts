import { Then } from "@cucumber/cucumber";
import "@nice-digital/wdio-cucumber-steps/lib/then";
import {checkContainsText} from "@nice-digital/wdio-cucumber-steps/lib/support/check/checkContainsText";
import {pause} from "@nice-digital/wdio-cucumber-steps/lib/support/action/pause";
import { waitForDisplayed } from "@nice-digital/wdio-cucumber-steps/lib/support/action/waitForDisplayed";
import selectors from "../selectors";



// Then(/^I can verify the header menu navigation link is displaying$/, async () => {
// 	await pause("1000");
// 	await waitForDisplayed(selectors.guidanceListPage.headerMenu, "");
// 	await checkContainsText("element", selectors.guidanceListPage.headerMenu, "", "Guidance");
// 	await pause("1000");
// });

Then(/^I can verify the Guidance nav is displaying$/, async () => {
	await pause("2000");
	await waitForDisplayed(selectors.guidanceListPage.guidanceNav, "");
	await checkContainsText("element", selectors.guidanceListPage.guidanceNav, "", "Guidance");
	await pause("2000");

});

Then(/^I can verify Standards and indicators nav is displaying$/, async () => {
	await pause("2000");
	await waitForDisplayed(selectors.guidanceListPage.standardsAnIndicatorsNav, "");
	// await checkContainsText("element", selectors.guidanceListPage.standardsAnIndicatorsNav, "", "Standards&nbsp;and indicators");
	await pause("2000");

});
Then(/^I can verify Life sciences nav is displaying$/, async () => {
	await pause("2000");
	await waitForDisplayed(selectors.guidanceListPage.lifeSciencesNav, "");
	await checkContainsText("element", selectors.guidanceListPage.lifeSciencesNav, "", "Life sciences");
	await pause("2000");

});
Then(/^I can verify British National Formulary nav is displaying$/, async () => {
	await pause("2000");
	await waitForDisplayed(selectors.guidanceListPage.bnfNav, "");
	await checkContainsText("element", selectors.guidanceListPage.bnfNav, "", "British National Formulary");
	await pause("2000");

});
Then(/^I can verify British National Formulary for Children nav is displaying$/, async () => {
	await pause("2000");
	await waitForDisplayed(selectors.guidanceListPage.bnfcNav, "");
	await checkContainsText("element", selectors.guidanceListPage.bnfcNav, "", "British National Formulary for Children (BNFC)");
	await pause("2000");

});
Then(/^I can verify the Clinical Knowledge Summaries nav is displaying$/, async () => {
	await pause("2000");
	await waitForDisplayed(selectors.guidanceListPage.cksNav, "");
	// await checkContainsText("element", selectors.guidanceListPage.cksNav, "", "Clinical Knowledge Summaries (CKS) ");
	await pause("2000");

});
Then(/^I can verify the About nav is displaying$/, async () => {
	await pause("2000");
	await waitForDisplayed(selectors.guidanceListPage.aboutNav, "");
	await checkContainsText("element", selectors.guidanceListPage.aboutNav, "", "About");
	await pause("2000");

});
