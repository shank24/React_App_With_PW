import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";

//Old Way
/*Given('I am on the {string} page', async function (pageId: string) {
    console.log(`I am on the ${pageId} page`);
    await global.page.goto("http://localhost:3000/")
});*/

//Via Regex
Given(
    /^I am on the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: string) {
        const {
            screen: { page },
        } = this;

        console.log(`I am on the ${pageId} page`);
        await page.goto("http://localhost:3000/")

    }
);