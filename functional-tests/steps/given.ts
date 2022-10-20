import { Given } from "@cucumber/cucumber";
import "@nice-digital/wdio-cucumber-steps/lib/given";

// Uncomment below section to write custom step definitions
/*import { Given } from "cucumber";

Given(
    /^I open the page "([^"]*)?"$/,
    openUrl
);*/

Given("I go to the NICE homepage", async () => {
	await browser.navigateTo("https://alpha.nice.org.uk");
});
