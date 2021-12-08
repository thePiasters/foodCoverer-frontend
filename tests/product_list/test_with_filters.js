describe("Test with dropdown filters", async function () {
  const productsPageLink = "#products-page";
  const productLinkUrl = "/products";
  const toggleButton = "button.navbar-toggler.collapsed";
  const details = "details";
  const firstProductCard = "#all-products > div:nth-child(1)";
  const firstProductCardButton = "#all-products > div:nth-child(1) button";

  const nutriScoreImageSelector = "#nutri-score-image";
  const nutriscore_c = "nutriscore_c";

  const gradesFlterSelector = "#grades-filter";
  const tagsFlterSelector = "#tags-filter";
  const brandsFilterSelector = "#brands-filter";

  const productTagVeganSelector = "#product-tag-vegan";
  const productTagsSelector = "#product-details-tags";

  const productDetailsBrand = "#product-details-brand";

  function loadProductsPage(browser) {
    browser
      .url(process.env.REACT_APP_FRONT_BASE_URL)
      .click(toggleButton)
      .click(productsPageLink)
      .assert.urlContains(productLinkUrl)
      .assert.visible(details)
      .waitForElementVisible(firstProductCard);
    browser.click(details);
    browser.expect.element(details).to.have.attribute("open");
  }

  function typeVegan(browser) {
    browser
      .keys("v")
      .keys("e")
      .keys("g")
      .keys("a")
      .keys("n")
      .keys(browser.Keys.ENTER);
  }

  function typeAldi(browser) {
    browser.keys("a").keys("l").keys("d").keys("i").keys(browser.Keys.ENTER);
  }

  it("Test filter by grade", function (browser) {
    loadProductsPage(browser);

    browser.click(gradesFlterSelector);
    browser.keys("c").keys(browser.Keys.ENTER);
    browser.click(firstProductCardButton);
    browser.expect.element(nutriScoreImageSelector).to.be.visible;
    browser.expect
      .element(nutriScoreImageSelector)
      .to.have.attribute("src")
      .which.contains(nutriscore_c);
  });

  it("Test filter by tag", function (browser) {
    loadProductsPage(browser);
    browser.click(tagsFlterSelector);
    typeVegan(browser);
    browser.click(firstProductCardButton);
    browser.assert.visible(productTagsSelector);
    browser.assert.visible(productTagVeganSelector);
    browser.expect
      .element(productTagVeganSelector)
      .to.have.attribute("src")
      .which.contains("/tag/vegan");
  });

  it("Test filter by brand", function (browser) {
    loadProductsPage(browser);
    browser.click(brandsFilterSelector);
    typeAldi(browser);
    browser.click(firstProductCardButton);
    browser.assert.visible(productDetailsBrand);
    browser.expect.element(productDetailsBrand).text.to.equal("aldi");
  });
});
