import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
const {chromium} = require("playwright");

BeforeAll(async() => {
    global.browser = await chromium.launch({
    });

}
