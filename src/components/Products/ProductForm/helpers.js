export function readProductValues(
  product,
  setTagsCallback,
  setAllergensCallback,
  setAdditivesCallback,
  setBrandCallback,
  setCategoryCallback,
  setSubcategoryCallback
) {
  setTagsCallback(
    product.tags.map((elem) => {
      return { value: elem, label: elem.name };
    })
  );
  setAllergensCallback(
    product.allergens.map((elem) => {
      return { value: elem, label: elem.name };
    })
  );
  setAdditivesCallback(
    product.additives.map((elem) => {
      return { value: elem, label: elem.symbol };
    })
  );

  if (product.brand) {
    setBrandCallback({
      label: product.brand.name,
      value: product.brand,
    });
  }
  if (product.subcategory) {
    setCategoryCallback({
      label: product.subcategory.category.name,
      value: product.subcategory.category,
    });
  }
  if (product.subcategory) {
    setSubcategoryCallback({
      label: product.subcategory.name,
      value: product.subcategory,
    });
  }
}

export function extractValuesFromDropdownSelect(elements) {
  const values = elements.map((elem) => {
    return elem.value;
  });
  return values;
}
