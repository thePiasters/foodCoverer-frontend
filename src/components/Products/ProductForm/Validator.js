import { t } from "dictionaries/en";

export function validate(
  barcode,
  name,
  selectedFile,
  subcategorySelectedOption,
  quantity,
  ingredients,
  tagsSelectedOptions,
  nutritionData,
  link
) {
  var errorMsg = "";
  var isError = false;

  // if (
  //   isNutritionDataProvided(nutritionData) &&
  //   !isNutritionDataComplete(nutritionData)
  // ) {
  //   isError = true;
  //   errorMsg += "Nutrition data not complete - please provide all values\n";
  // }

  if (!barcode) {
    isError = true;
    errorMsg += t.Error.missingBarcode;
  } else if (barcode.length > 13) {
    isError = true;
    errorMsg += t.Error.invalidBarcodeLength;
  } else if (barcode < 0) {
    isError = true;
    errorMsg += t.Error.negativeBarcode;
  }

  if (!name) {
    isError = true;
    errorMsg += t.Error.missingName;
  } else if (name.length < 1 || name.trim().length === 0 || name.length > 50) {
    isError = true;
    errorMsg += t.Error.invalidName;
  }

  if (!subcategorySelectedOption) {
    isError = true;
    errorMsg += t.Error.missingSubcategory;
  }

  if (quantity && quantity <= 0) {
    isError = true;
    errorMsg += t.Error.invalidQuantity;
  } else if (isNaN(parseInt(quantity))) {
    isError = true;
    errorMsg += t.Error.invalidQuantity;
  }

  if (ingredients && ingredients.length > 1000) {
    isError = true;
    errorMsg += "Ingrients description is too long";
  }

  if (selectedFile) {
    if (
      !(selectedFile.type == "image/jpeg" || selectedFile.type == "image/png")
    ) {
      isError = true;
      errorMsg += "File uploded in wrong format";
    } else if (selectedFile.size > 1048576) {
      isError = true;
      errorMsg += "Uploaded file is to big";
    }
  }
  if (link && !isValidUrl(link)) {
    isError = true;
    errorMsg += t.Error.invalidUrl;
  }

  if (!checkNutitionData(nutritionData)) {
    isError = true;
    errorMsg += t.Error.invlaidNutrition;
  }
  return { isError: isError, errMsg: errorMsg };
}

function isValidUrl(_string) {
  const matchpattern =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
  return matchpattern.test(_string);
}

function isNutritionDataComplete(nutritionData) {
  if (
    nutritionData.carbohydrates &&
    nutritionData.energyKcal &&
    nutritionData.fat &&
    nutritionData.fiber &&
    nutritionData.proteins &&
    nutritionData.saturatedFat &&
    nutritionData.salt &&
    nutritionData.sodium &&
    nutritionData.sugars &&
    nutritionData.proteins
  ) {
    return true;
  }
  return false;
}
function isNutritionDataProvided(nutritionData) {
  if (
    nutritionData.carbohydrates ||
    nutritionData.energyKcal ||
    nutritionData.fat ||
    nutritionData.fiber ||
    nutritionData.proteins ||
    nutritionData.saturatedFat ||
    nutritionData.salt ||
    nutritionData.sodium ||
    nutritionData.sugars ||
    nutritionData.proteins
  ) {
    return true;
  }
  return false;
}

function checkNutitionData(nutritionData) {
  if (checkIfNutriDataCorrect(nutritionData.carbohydrates)) {
    return false;
  }
  if (
    nutritionData.energyKcal &&
    (nutritionData.energyKcal < 0 || nutritionData.energyKcal > 1000)
  ) {
    return false;
  }

  if (checkIfNutriDataCorrect(nutritionData.fat)) {
    return false;
  }
  if (checkIfNutriDataCorrect(nutritionData.fiber)) {
    return false;
  }
  if (checkIfNutriDataCorrect(nutritionData.proteins)) {
    return false;
  }
  if (checkIfNutriDataCorrect(nutritionData.fruitVegetablesNuts)) {
    return false;
  }
  if (checkIfNutriDataCorrect(nutritionData.salt)) {
    return false;
  }
  if (checkIfNutriDataCorrect(nutritionData.saturatedFat)) {
    return false;
  }
  if (checkIfNutriDataCorrect(nutritionData.sodium)) {
    return false;
  }
  if (checkIfNutriDataCorrect(nutritionData.sugars)) {
    return false;
  }

  // if (!isSumValid(nutritionData)) {
  //   return false;
  // }
  return true;
}
function checkIfNutriDataCorrect(data) {
  if (data && (data < 0 || data > 100)) {
    return false;
  }
}

function getNumericValue(data) {
  if (!data) {
    return 0;
  }
  return parseFloat(data);
}

function isSumValid(nutritionData) {
  var sum =
    getNumericValue(nutritionData.fat) +
    getNumericValue(nutritionData.fiber) +
    getNumericValue(nutritionData.sugars) +
    getNumericValue(nutritionData.carbohydrates) +
    getNumericValue(nutritionData.proteins) +
    getNumericValue(nutritionData.fruitVegetablesNuts) +
    getNumericValue(nutritionData.sodium) +
    getNumericValue(nutritionData.saturatedFat) +
    getNumericValue(nutritionData.salt);

  return sum < 100;
}
