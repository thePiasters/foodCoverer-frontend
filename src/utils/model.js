export function getEmptyProduct() {
  const product = {
    productId: null,
    productName: null,
    picture: null,
    brand: null,
    additives: [],
    subcategory: null,
    allergens: [],
    tags: [],
    grade: null,
    ingredients: null,
    quantity: 0,
  };

  return product;
}

export function getEmptyNutriData() {
  const empty_nutri_data = {
    id: null,
    carbohydrates: null,
    energyKcal: null,
    fat: null,
    fiber: null,
    fruitVegetablesNuts: null,
    proteins: null,
    salt: null,
    saturatedFat: null,
    sodium: null,
    sugars: null,
  };
  return empty_nutri_data;
}

export function createProduct(
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
) {
  const product = {
    productId: barcode,
    productName: name,
    brand: brand,
    additives: additives,
    subcategory: subcategory,
    allergens: allergens,
    tags: tags,
    ingredients: ingredients,
    quantity: quantity,
    grade: grade,
  };

  return product;
}
