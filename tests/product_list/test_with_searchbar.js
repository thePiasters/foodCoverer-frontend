describe("Test with searchBar", async function () {
  const productsPageLink = "#products-page";
  const productLinkUrl = "/products";
  const toggleButton = "button.navbar-toggler.collapsed";
  const searchBar = "input.prompt.form-control";
  const firstProductCard = "#all-products > div:nth-child(1)";
  const firstProductCardFooterP =
    "#all-products > div:nth-child(1)  div.card-footer > p";

  const searchTermCookie = "cookie";

  function loadProductsPage(browser) {
    browser
      .url(process.env.REACT_APP_FRONT_BASE_URL)
      .click(toggleButton)
      .click(productsPageLink)
      .assert.urlContains(productLinkUrl)
      .assert.visible(searchBar)
      .waitForElementVisible(firstProductCard);
  }
  function typeCookieInSearchBar(browser) {
    browser.click(searchBar);
    browser.keys("c");
    browser.keys("o");
    browser.keys("o");
    browser.keys("k");
    browser.keys("i");
    browser.keys("e");
  }
  it("Test search bar", function (browser) {
    loadProductsPage(browser);
    typeCookieInSearchBar(browser);

    browser.expect
      .element(firstProductCardFooterP)
      .text.to.contain(searchTermCookie);
  });
});
