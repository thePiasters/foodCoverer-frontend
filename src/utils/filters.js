export function filterObjectsCollecionByTerm(collection, term) {
  if (!term) return collection;
  if (term == "") return collection;
  const filtered = collection.filter((elem) => {
    return Object.values(elem)
      .join(" ")
      .toLowerCase()
      .includes(term.toLowerCase());
  });
  return filtered;
}

export function filterUsersCollecionByTerm(users, term) {
  if (!term) return users;
  if (term == "") return users;
  const filtered = users.filter((elem) => {
    return (elem.name ? elem.name : "")
      .concat(elem.email ? elem.email : "")
      .toLowerCase()
      .includes(term.toLowerCase());
  });
  return filtered;
}

export function filterBrandsCollecionByTerm(brands, term) {
  if (!term) return brands;
  if (term == "") return brands;
  const filtered = brands.filter((elem) => {
    return elem.name.toLowerCase().includes(term.toLowerCase());
  });
  return filtered;
}

export function fiterProductNameByTerm(products, term) {
  if (term == "") {
    return products;
  }
  const filteredProducts = products.filter((product) => {
    return product.productName.toLowerCase().includes(term.toLowerCase());
  });
  return filteredProducts;
}

function includesAll(arr1, arr2) {
  return arr1.every((element) => {
    return arr2.includes(element);
  });
}

function includesNone(arr1, arr2) {
  return arr1.every((element) => {
    return !arr2.includes(element);
  });
}

function checkForBrands(product, brands_ids) {
  if (!brands_ids || brands_ids.length == 0) {
    return true;
  }
  if (!product.brand) {
    return false;
  }

  return brands_ids.includes(product.brand.id);
}

function checkForGrades(product, grades) {
  if (!grades || grades.length == 0) {
    return true;
  }
  return grades.includes(product.grade);
}

function checkForAllergens(product, allergens) {
  if (!product.allergens || !allergens) {
    return true;
  }
  if (allergens.length == 0) {
    return true;
  }
  const product_allergens_ids = product.allergens.map(
    (allergen) => allergen.id
  );
  return includesNone(allergens, product_allergens_ids);
}

function checkForAdditives(product, additives) {
  if (!product.additives || !additives) {
    return true;
  }
  if (additives.length == 0) {
    return true;
  }
  const product_additives_ids = product.additives.map(
    (additive) => additive.id
  );
  return includesNone(additives, product_additives_ids);
}

export function filterProductsByTags(
  products,
  tags,
  brands,
  grades,
  allergens,
  additives
) {
  const tags_ids = tags.map((tag) => tag.id);

  const filtered = products.filter((product) => {
    const product_tags_ids = product.tags.map((tag) => tag.id);

    return (
      checkForAllergens(product, allergens) &&
      includesAll(tags_ids, product_tags_ids) &&
      checkForBrands(product, brands) &&
      checkForGrades(product, grades) &&
      checkForAdditives(product, additives)
    );
  });

  return filtered;
}
