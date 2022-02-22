import { Given } from "@cucumber/cucumber";
import "@nice-digital/wdio-cucumber-steps/lib/given";

// Uncomment below section to write custom step definitions
// import { Given } from "@wdio/cucumber-framework";
//Given(
//    /^I open the page "([^"]*)?"$/,
//    openUrl
//);

Given("I go to the GlobalNav homepage", async () => {
	await browser.url("https://test-global-nav.nice.org.uk/");
	
});
