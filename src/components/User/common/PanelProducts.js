import ProductsList from "./ProductsList";
import React, { useState, useEffect } from "react";

import { filterObjectsCollecionByTerm } from "utils/filters";

import api from "api/foodDbApi";

const PanelProducts = (props) => {
  const { products, userRole } = props;

  function deleteProduct(product) {
    api.delete("/products/delete", { data: product }).then(function (response) {
      props.reloadProducts();
    });
  }

  function handleSearch(searchTerm) {
    const filteredProducts = filterObjectsCollecionByTerm(
      props.products,
      searchTerm
    );
    setFilteredProducts(filteredProducts);
  }

  const [productsFiltered, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [props]);

  return (
    <ProductsList
      products={productsFiltered}
      handleSearch={handleSearch}
      deleteProduct={deleteProduct}
      userRole={userRole}
    />
  );
};
export default PanelProducts;
