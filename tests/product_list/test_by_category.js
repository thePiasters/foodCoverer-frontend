describe("Test product list", async function () {
  const productsPageLink = "#products-page";
  const productLinkUrl = "/products";
  const toggleButton = "button.navbar-toggler.collapsed";
  const categories = [
    "diaries",
    "frozen_foods",
    "snacks_and_sweets",
    "desserts",
    "meats_and_meat_analogs",
    "condiments_and_sauces",
    "ready_and_instant_meals",
    "spreads",
    "canned_products",
    "fats",
    "beverages",
    "cereal_products",
    "other",
  ];

  function toLowerCaseReplaceSpaces(str) {
    return str.split(" ").join("_").toLowerCase();
  }

  function verifySubctegories(browser, allSubctaegories, categoryName) {
    console.log(categoryName);
    browser.elements("css selector", allSubctaegories, function (result) {
      for (var i = 0; i < result.value.length; i++) {
        const elementId = result.value[i].ELEMENT;
        browser.elementIdClick(elementId);
        browser.elementIdText(elementId, function (result) {
          const elemInnerTest = toLowerCaseReplaceSpaces(result.value);

          browser.assert.urlContains(toLowerCaseReplaceSpaces(categoryName));
          if (elemInnerTest != "view_all") {
            browser.assert.urlContains(elemInnerTest);
          }
        });
      }
    });
  }

  function testCategory(browser, categoryName) {
    const selector = `#${toLowerCaseReplaceSpaces(categoryName)}`;
    const firstSubcategorySelector =
      selector +
      "> div.react-slidedown.pro-inner-list-item > div > ul > li:nth-child(1)";

    const allSubctaegories =
      selector + " > div.react-slidedown.pro-inner-list-item > div > ul > li";
    browser
      .url(process.env.REACT_APP_FRONT_BASE_URL)
      .click(toggleButton)
      .click(productsPageLink)
      .assert.urlContains(productLinkUrl)
      .click(selector)
      .waitForElementVisible(firstSubcategorySelector);

    verifySubctegories(browser, allSubctaegories, categoryName);
  }

  it("Test all categories", function (browser) {
    browser.perform(function () {
      for (var i = 0; i < categories.length; i++) {
        testCategory(browser, categories[i]);
      }
    });
  });

  it("Test category selection change", function (browser) {
    const thirdSubOption =
      "#diaries> div.react-slidedown.pro-inner-list-item > div > ul > li:nth-child(3)";
    testCategory(browser, "fats");
    browser
      .click("#diaries")
      .waitForElementVisible(thirdSubOption)
      .click(thirdSubOption)
      .getText(thirdSubOption, function (result) {
        browser.assert.urlContains(toLowerCaseReplaceSpaces(result.value));
      });
  });
});
