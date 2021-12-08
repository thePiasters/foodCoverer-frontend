const google = require("../login");
var dictionary = require("../../src/dictionaries/en.js");

describe("Test add product form", async function () {
  const addProductButton = "#add-product-button";
  const emailInput = "#identifierId";

  const toggleButton = "button.navbar-toggler.collapsed";
  const productsPageLink = "#products-page";
  const firstProductCard = "#all-products > div:nth-child(1)";

  const barcodeInput = "#create-product-form > div:nth-child(1)  input";
  const nameInput = "#create-product-form > div:nth-child(2) input";
  const quantity = "#create-product-form > div:nth-child(6) input";

  const provideLinkCheckbox = "#create-product-form > div:nth-child(9) input";
  const linkInput = "#formFile";
  const formAlert = "#invalid-data-alert";
  const errorMsg = dictionary.t.Error;

  it("Test add product should redirect not logged in user to login page", function (browser) {
    browser.url(process.env.REACT_APP_FRONT_BASE_URL + "/products");
    browser.waitForElementVisible(addProductButton);
    browser.click(addProductButton);
    browser.waitForElementVisible(emailInput, 10000);
    browser.assert.urlContains("accounts.google");
  });

  it("Test add ppoduct should redirect not logged in user to main page", function (browser) {
    browser.url(process.env.REACT_APP_FRONT_BASE_URL + "/add/product");
    browser.waitForElementVisible("#main-page-title");
  });

  it("Display form", function (browser) {
    google.logIn(browser);

    browser
      .click(toggleButton)
      .waitForElementVisible(productsPageLink)
      .click(productsPageLink)
      .waitForElementVisible(firstProductCard)
      .waitForElementVisible(addProductButton)
      .click(addProductButton);

    browser.assert.urlContains("/add/product");
    browser.expect.element(barcodeInput).to.be.visible;
  });

  it("Set invalid barcode value", function (browser) {
    browser.expect.element(barcodeInput).to.be.visible;
    browser.setValue(barcodeInput, -45346);
    browser.keys(browser.Keys.ENTER);

    browser.waitForElementVisible(formAlert);

    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.general.replace("\n", ""));
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.negativeBarcode.replace("\n", ""));
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.missingName.replace("\n", ""));
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.missingSubcategory.replace("\n", ""));
  });

  it("Set to long barcode", function (browser) {
    browser.expect.element(barcodeInput).to.be.visible;
    browser.clearValue(barcodeInput);
    browser.setValue(barcodeInput, 3457837485787345346);
    browser.keys(browser.Keys.ENTER);

    browser.waitForElementVisible(formAlert);
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.invalidBarcodeLength.replace("\n", ""));
  });

  it("Set invalid quantity", function (browser) {
    browser.expect.element(quantity).to.be.visible;
    browser.setValue(quantity, -3);
    browser.keys(browser.Keys.ENTER);

    browser.waitForElementVisible(formAlert);
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.invalidQuantity.replace("\n", ""));
    browser.clearValue(barcodeInput);
    browser.setValue(quantity, -3);
    browser.waitForElementVisible(formAlert);
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.invalidQuantity.replace("\n", ""));
  });

  it("Set invalid name", function (browser) {
    const invalidName = "mustbelongerthan50tududtududtududtudutudutududtududut";

    browser.expect.element(nameInput).to.be.visible;
    browser.setValue(nameInput, invalidName);
    browser.keys(browser.Keys.ENTER);

    browser.waitForElementVisible(formAlert);
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.nameToLong.replace("\n", ""));
  });

  it("Set invalid url", function (browser) {
    const invalidUrl = "this-isnt-valid-url";

    browser.keys(browser.Keys.PAGEDOWN);
    browser.keys(browser.Keys.PAGEDOWN);
    browser.pause(100);

    browser.waitForElementVisible(provideLinkCheckbox);
    browser.click(provideLinkCheckbox);
    browser.pause(100);
    browser.setValue(linkInput, invalidUrl);

    browser.keys(browser.Keys.ENTER);

    browser.waitForElementVisible(formAlert);
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.invalidUrl.replace("\n", ""));
  });

  it("Set invalid nutrition data", function (browser) {
    const diplayNutriForm = "#create-product-form > p > em";
    const energyInput =
      "#nutri-data-form > div:nth-child(1)> div:nth-child(1) > input";
    const fatInput =
      "#nutri-data-form > div:nth-child(1) > div:nth-child(2) > input";

    const fiberInput =
      "#nutri-data-form > div:nth-child(2) > div:nth-child(2) > input";

    browser.keys(browser.Keys.PAGEDOWN);
    browser.keys(browser.Keys.PAGEDOWN);
    browser.pause(100);
    browser.waitForElementVisible(diplayNutriForm);
    browser.click(diplayNutriForm);

    browser.waitForElementVisible(energyInput);
    browser.keys(browser.Keys.PAGEDOWN);

    browser.setValue(energyInput, -10);
    browser.keys(browser.Keys.ENTER);

    browser.waitForElementVisible(formAlert);
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.invlaidNutrition.replace("\n", ""));

    browser.keys(browser.Keys.PAGEDOWN);
    browser.keys(browser.Keys.PAGEDOWN);

    browser.clearValue(energyInput);
    browser.setValue(energyInput, 100);
    browser.setValue(fatInput, 51);
    browser.setValue(fiberInput, 51);

    browser.keys(browser.Keys.ENTER);
    browser.waitForElementVisible(formAlert);
    browser.expect
      .element(formAlert)
      .text.to.contain(errorMsg.invlaidNutrition.replace("\n", ""));
  });
});
