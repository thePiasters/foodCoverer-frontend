import * as Constants from "components/Constatns.js";

export function isAdamin(role) {
  return role == Constants.USER_ROLE_ADMIN;
}

export function isLoggedIn(role) {
  return isAdamin(role) || role === Constants.USER_ROLE_USER;
}
