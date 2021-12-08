export function capitalize(str) {
  if (str && str != "") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else return "";
}

export function toLowerCaseReplaceSpaces(str) {
  return str.split(" ").join("_").toLowerCase();
}
