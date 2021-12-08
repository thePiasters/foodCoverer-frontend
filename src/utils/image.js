import * as Constants from "components/Constatns.js";

export function getProductPicturePath(image) {
  if (!image) return "";
  if (image.imageSource != Constants.IMAGE_SOURCE_SERVER) return image.imageUrl;

  return process.env.REACT_APP_BASE_URL + image.imageUrl;
}

export function getPictureUrl(imagePath) {
  return process.env.REACT_APP_BASE_URL + "/" + imagePath;
}
