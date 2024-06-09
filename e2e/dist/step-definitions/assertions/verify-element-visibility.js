"use strict";

var _cucumber = require("@cucumber/cucumber");

var _test = require("@playwright/test");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" should contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(elementKey, expectedElement) {
    var page, content;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          page = this.screen.page;
          console.log("the ".concat(elementKey, " should contain the text ").concat(expectedElement));
          _context.next = 4;
          return page.textContent("[data-id='contacts']");

        case 4:
          content = _context.sent;
          (0, _test.expect)(content).toBe(expectedElement);

        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should be displayed$/, /*#__PURE__*/function () {
  var _name = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey) {
    var page, locator;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          page = this.screen.page;
          console.log("the ".concat(elementKey, " should be displayed"));
          _context2.next = 4;
          return page.locator(".testing-talks-logo");

        case 4:
          locator = _context2.sent;
          (0, _test.expect)(locator).toBeVisible();

        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));

  function name(_x4, _x5) {
    return _name.apply(this, arguments);
  }

  return name;
}());
/*
Then('the {string} should contain the text {string}', async function (elementKey: string, expectedElement: string) {
    console.log(`the ${elementKey} should contain the text ${expectedElement}`);
    const content = await global.page.textContent("[data-id='contacts']");
    expect(content).toBe(expectedElement);
});
*/