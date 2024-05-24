import { Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (elementKey: string, expectedElement: string) {
        console.log(`the ${elementKey} should contain the text ${expectedElement}`);
        const content = await global.page.textContent("[data-id='contacts']");
        expect(content).toBe(expectedElement);
    }
);

Then(
    /^the "([^"]*)" should be displayed$/,
    async function name(elementKey: string) {
        console.log(`the ${elementKey} should be displayed`);
        const locator = await global.page.locator(".testing-talks-logo");
        expect(locator).toBeVisible();
    }
);
/*
Then('the {string} should contain the text {string}', async function (elementKey: string, expectedElement: string) {
    console.log(`the ${elementKey} should contain the text ${expectedElement}`);
    const content = await global.page.textContent("[data-id='contacts']");
    expect(content).toBe(expectedElement);
});
*/



