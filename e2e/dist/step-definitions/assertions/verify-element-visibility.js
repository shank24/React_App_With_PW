"use strict";

var _cucumber = require("@cucumber/cucumber");
var _test = require("@playwright/test");
(0, _cucumber.Then)(/^the "([^"]*)" should contain the text "(.*)"$/, async function (elementKey, expectedElement) {
  const {
    screen: {
      page
    }
  } = this;
  console.log("the ".concat(elementKey, " should contain the text ").concat(expectedElement));
  const content = await page.textContent("[data-id='contacts']");
  (0, _test.expect)(content).toBe(expectedElement);
});
(0, _cucumber.Then)(/^the "([^"]*)" should be displayed$/, async function name(elementKey) {
  const {
    screen: {
      page
    }
  } = this;
  console.log("the ".concat(elementKey, " should be displayed"));
  const locator = await page.locator(".testing-talks-logo");
  (0, _test.expect)(locator).toBeVisible();
});
/*
Then('the {string} should contain the text {string}', async function (elementKey: string, expectedElement: string) {
    console.log(`the ${elementKey} should contain the text ${expectedElement}`);
    const content = await global.page.textContent("[data-id='contacts']");
    expect(content).toBe(expectedElement);
});
*/