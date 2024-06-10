"use strict";

var _cucumber = require("@cucumber/cucumber");
//Old Way
/*Given('I am on the {string} page', async function (pageId: string) {
    console.log(`I am on the ${pageId} page`);
    await global.page.goto("http://localhost:3000/")
});*/

//Via Regex
(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    }
  } = this;
  console.log("I am on the ".concat(pageId, " page"));
  await page.goto("http://localhost:3000/");
});