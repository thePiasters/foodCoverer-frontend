var dictionary = require("../src/dictionaries/en.js");

describe("Test nutriscore panel", async function () {
  const toggleButton = "button.navbar-toggler.collapsed";
  const nutrScoreSectionLink = "#nutri-section";
  const nutriComponent = "#nutri";

  const externalLink = " #nutri-score-info-link";

  const NutriScoreLabels = dictionary.t.NutriScore;

  function checkIfContainsLabel(browser, label) {
    browser.expect.element(nutriComponent).text.to.contain(label);
  }

  it("Test nutriscore", function (browser) {
    browser
      .url(process.env.REACT_APP_FRONT_BASE_URL)
      .click(toggleButton)
      .waitForElementVisible(nutrScoreSectionLink)
      .click(nutrScoreSectionLink);

    browser.expect.element(nutriComponent).to.be.visible;
    checkIfContainsLabel(browser, NutriScoreLabels.title);
    checkIfContainsLabel(browser, NutriScoreLabels.gradeA);
    checkIfContainsLabel(browser, NutriScoreLabels.gradeADesc);
    checkIfContainsLabel(browser, NutriScoreLabels.gradeE);
    checkIfContainsLabel(browser, NutriScoreLabels.gradeEDesc);
    checkIfContainsLabel(browser, NutriScoreLabels.gradeDetermination);
    checkIfContainsLabel(browser, NutriScoreLabels.linkLabel);
  });
});
