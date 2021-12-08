const toggleButton = "button.navbar-toggler.collapsed";
const logInButton = "button.googleButton";

const passwordInput = "#password input";
const emailInput = "#identifierId";
const nextIdentifierButton = "#identifierNext button";
const nextPassButton = "#passwordNext button";

function logIn(browser) {
  browser
    .url(process.env.REACT_APP_FRONT_BASE_URL)
    .click(toggleButton)
    .waitForElementVisible(logInButton)
    .click(logInButton);

  browser
    .setValue(emailInput, process.env.REACT_APP_TEST_ADMIN)
    .click(nextIdentifierButton);

  browser
    .waitForElementVisible(passwordInput)
    .setValue(passwordInput, process.env.REACT_APP_TEST_PASS)
    .click(nextPassButton);
}

function logInAsUser(browser) {
  browser
    .url(process.env.REACT_APP_FRONT_BASE_URL)
    .click(toggleButton)
    .waitForElementVisible(logInButton)
    .click(logInButton);

  browser
    .setValue(emailInput, process.env.REACT_APP_TEST_USER)
    .click(nextIdentifierButton);

  browser
    .waitForElementVisible(passwordInput)
    .setValue(passwordInput, process.env.REACT_APP_TEST_PASS)
    .click(nextPassButton);
}

module.exports = {
  logIn: logIn,
  logInAsUser: logInAsUser,
};
