import { createProduct } from "./model";
import { getNutriScore } from "./nutriscore";

import api from "api/foodDbApi";
import * as Constants from "components/Constatns.js";

export function processForm(
  barcode,
  name,
  brand,
  subcategory,
  quantity,
  ingredients,
  tags,
  allergens,
  additives,
  nutriData,
  file,
  callback,
  image,
  user,
  imageSource,
  link,
  mode,
  handleError
) {
  const grade = getNutriScore(nutriData, subcategory.category);

  const productData = createProduct(
    barcode,
    name,
    brand,
    subcategory,
    quantity,
    ingredients,
    tags,
    allergens,
    additives,
    grade
  );
  if (image) {
    productData.image = image;
  }

  if (user) {
    productData.user = user;
  }

  const data = new FormData();
  data.append(
    "product",
    new Blob([JSON.stringify(productData)], { type: "application/json" })
  );
  data.append(
    "nutriData",
    new Blob([JSON.stringify(nutriData)], { type: "application/json" })
  );

  if (mode == Constants.FORM_MODE_CREATE) {
    if (imageSource == Constants.IMAGE_SOURCE_SERVER) {
      data.append("file", file);
      api
        .post("/products/create/withFile", data)
        .then((response) => callback(response))
        .catch(function (error) {
          if (error.response) {
            //IF 409
            handleError("Product with given barcode alredy exsist");
          }
        });
    } else if (imageSource == Constants.IMAGE_SOURCE_LINK) {
      data.append("link", link);
      api
        .post("/products/create/withLink", data)
        .then((response) => callback(response))
        .catch(function (error) {
          if (error.response) {
            //IF 409
            handleError("Product with given barcode alredy exsist");
          }
        });
    }
  } else if (mode == Constants.FORM_MODE_UPDATE) {
    if (imageSource == Constants.IMAGE_SOURCE_SERVER) {
      data.append("file", file);
      api
        .post("/products/update/withFile", data)
        .then((response) => callback(response));
    } else if (imageSource == Constants.IMAGE_SOURCE_LINK) {
      data.append("link", link);
      api
        .post("/products/update/withLink", data)
        .then((response) => callback(response));
    }
  }
}
