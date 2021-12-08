const google = require("../login");
const dictionary = require("../../src/dictionaries/en.js");

const toggleButton = "button.navbar-toggler.collapsed";
const userPanelLink = "#user-panel";

const userPanelBrandsButton = "#user-panel-nav > div:nth-child(2) > a ";
const addBrandButton = "#add-brand-button";
const inuputField = "#add-brand-form  input";
const brandsList = "#brands-list";
const alert = "#invalid-data-alert";

const firstTestBrand = "FIRST_TEST_BRAND";
const secondTestBrand = "SECOND_TEST_BRAND";

const firstListItem = "#brands-list > div:nth-child(1)";
const secondListItem = "#brands-list > div:nth-child(1)";

const firstDelete = "#brands-list > div:nth-child(1) > div #delete-button";

describe("Verify brands panel", function () {
  it("Test create duplicated brand", function (browser) {
    google.logInAsUser(browser);
    browser
      .click(toggleButton)
      .waitForElementVisible(userPanelLink)
      .click(userPanelLink)
      .waitForElementVisible(userPanelBrandsButton)
      .click(userPanelBrandsButton)
      .waitForElementVisible(addBrandButton)
      .click(addBrandButton);

    browser.waitForElementVisible(inuputField);
    browser.setValue(inuputField, firstTestBrand);
    browser.keys(browser.Keys.ENTER);
    browser.clearValue(inuputField);

    browser.setValue(inuputField, secondTestBrand);
    browser.keys(browser.Keys.ENTER);
    browser.clearValue(inuputField);

    browser.waitForElementVisible(firstListItem);
    browser.waitForElementVisible(secondListItem);

    browser.setValue(inuputField, firstTestBrand);

    browser.pause(100);
    browser.keys(browser.Keys.ENTER);
    browser.pause(100);
    browser.keys(browser.Keys.ENTER);

    browser
      .waitForElementVisible(alert)
      .expect.element(alert)
      .text.to.contain(dictionary.t.Panel.Brand.errorMsg_01);

    browser.clearValue(inuputField);
    browser.expect.element(brandsList).text.to.contain(firstTestBrand);
    browser.expect.element(brandsList).text.to.contain(secondTestBrand);

    browser.click(firstDelete);
    browser.pause(1000);
    browser.click(firstDelete);
  });
});
