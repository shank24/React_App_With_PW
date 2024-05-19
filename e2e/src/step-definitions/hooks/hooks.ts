import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";
import { chromium } from "playwright";

//const chromium = require("playwright");

BeforeAll(async() => {
    global.browser = await chromium.launch({
    });

}
