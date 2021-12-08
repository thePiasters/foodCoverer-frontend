import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Products from "components/Products/AllProducts/ProductsList/Products.js";
import api from "api/foodDbApi";
import { Container, Row } from "react-bootstrap";
import "./ProductsWrapper.scss";

const ProductsAllWrapper = (props) => {
  const {
    allProducts,
    tags,
    categories,
    additives,
    allergens,
    isLoggedIn,
    userRole,
    brands,
  } = props;

  const { onLoginSuccess, onLoginFailure, onSignoutSuccess, reloadProducts } =
    props;

  const location = useLocation();
  console.log(location);
  const [subcategory, setSubcategory] = useState();
  const [category, setCategory] = useState();

  const { categoryName, subcategoryName } = useParams();
  const [products, setProducts] = useState([]);

  const getProductsByCategory = async (category) => {
    const response = await api.post(`/products/category`, category);
    return response.data;
  };

  const getProductsBySubcategory = async (subcategory) => {
    const response = await api.post(`/products/subcategory`, subcategory);
    return response.data;
  };

  useEffect(() => {
    setCategory(null);
    setSubcategory(null);

    if (subcategoryName && location.state) {
      const getProducts = async () => {
        const allProducts = await getProductsBySubcategory(
          location.state.subcategory
        );
        if (allProducts) setProducts(allProducts);
        setCategory(location.state.subcategory.category);
        setSubcategory(location.state.subcategory);
      };

      getProducts();
    } else if (categoryName && location.state) {
      const getProducts = async () => {
        console.log(location.state.category);
        const allProducts = await getProductsByCategory(
          location.state.category
        );
        if (allProducts) setProducts(allProducts);
        setCategory(location.state.category);
      };

      getProducts();
    } else {
      setProducts(allProducts);
    }
  }, [categoryName, subcategoryName, props]);

  return (
    <Container className="products-container">
      <Row>
        <Products
          currentCategory={category}
          currentSubcategory={subcategory}
          isLoggedIn={isLoggedIn}
          tags={tags}
          products={products}
          categories={categories}
          additives={additives}
          allergens={allergens}
          userRole={userRole}
          brands={brands}
          onLoginSuccess={onLoginSuccess}
          onLoginFailure={onLoginFailure}
          onSignoutSuccess={onSignoutSuccess}
          reloadProducts={reloadProducts}
        />
      </Row>
    </Container>
  );
};
export default ProductsAllWrapper;
