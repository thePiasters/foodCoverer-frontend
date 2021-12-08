const google = require("../login");

const toggleButton = "button.navbar-toggler.collapsed";
const productsPageLink = "#products-page";
const firstProductCard = "#all-products > div:nth-child(1)";
const addProductButton = "#add-product-button";

const barcodeInput = "#create-product-form > div:nth-child(1)  input";
const nameInput = "#create-product-form > div:nth-child(2) input";
const quantity = "#create-product-form > div:nth-child(6) input";

const brandInput = "#react-select-13-input";
const categoryInput = "#react-select-15-input";
const subcategoryInput = "#react-select-17-input";

const provideLinkCheckbox = "#create-product-form > div:nth-child(9) input";
const linkInput = "#formFile";

describe("Test create product", async function () {
  it("Test create product", function (browser) {
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

    browser.setValue(barcodeInput, 89765413563);
    browser.setValue(nameInput, "Sample name");
    browser.setValue(quantity, 125);

    browser.setValue(brandInput, "ades");
    browser.keys(browser.Keys.TAB);

    browser.setValue(categoryInput, "Diaries");
    browser.keys(browser.Keys.TAB);

    browser.setValue(subcategoryInput, "Milk");
    browser.keys(browser.Keys.TAB);
    browser.keys(browser.Keys.TAB);

    browser.keys(browser.Keys.PAGEDOWN);
    browser.keys(browser.Keys.PAGEDOWN);
    browser.pause(100);

    browser.waitForElementVisible(provideLinkCheckbox);
    browser.click(provideLinkCheckbox);

    browser.setValue(
      linkInput,
      "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612"
    );

    browser.keys(browser.Keys.ENTER);
    browser.keys(browser.Keys.PAGEUP);
    browser.waitForElementVisible("#delete-button");
    browser.pause(1000);

    browser.click("#delete-button");
    browser.acceptAlert();

    browser.waitForElementVisible(addProductButton);
    browser.assert.urlContains("/products");
  });
});
