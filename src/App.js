import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RouterComponent from "./routes/RouterComponent";
import api from "./api/foodDbApi";

function App() {
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesWithSub, setCategoriesWithSub] = useState([]);
  const [products, setProducts] = useState([]);
  const [additives, setAdditives] = useState([]);
  const [brands, setBrands] = useState([]);
  const [allergens, setAllergens] = useState([]);
  const [userRole, setUserRole] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginSuccess = (res) => {
    api
      .post("/users/authenticate", res.getAuthResponse().id_token)
      .then(function (response) {
        const role = response.data;
        if (role == "NONE" || role == "INACTIVE") {
          alert("Your account is invalid or inactive");
          onLoginFailure(res);
        } else {
          setUserRole(role);
          setIsLoggedIn(true);
        }
      });
  };

  const onLoginFailure = (res) => {
    alert("Your account is invalid or inactive");
  };

  const onSignoutSuccess = (res) => {
    localStorage.clear();
    alert("You have been logged out successfully");
    console.clear();
    api.get("/users/logOut").then(function (response) {
      setIsLoggedIn(false);
      setUserRole("NONE");
    });
    window.location.replace("/");
  };

  const getTags = async () => {
    const response = await api.get("tags/all");
    return response.data;
  };

  const getCategories = async () => {
    const response = await api.get("/categories/all");
    return response.data;
  };

  const getCategoriesWithSubcategories = async () => {
    const response = await api.get("categories/all/subcategories");
    return response.data;
  };

  const getAdditives = async () => {
    const response = await api.get("/additives/all");
    return response.data;
  };

  const getBrands = async () => {
    const response = await api.get("/brands/all");
    return response.data;
  };

  const getProducts = async () => {
    const response = await api.get("/products/all");
    return response.data;
  };

  const getAllergens = async () => {
    const response = await api.get("/allergens/all");
    return response.data;
  };

  function loadProducts() {
    const getAllProducts = async () => {
      const allProducts = await getProducts();
      if (allProducts) setProducts(allProducts);
    };
    getAllProducts();
  }

  function loadBrands() {
    const getAllBrands = async () => {
      const allBrands = await getBrands();
      if (allBrands) setBrands(allBrands);
    };
    getAllBrands();
  }

  useEffect(() => {
    loadProducts();
    loadBrands();

    const getAllTags = async () => {
      const allTags = await getTags();
      if (allTags) setTags(allTags);
    };

    const getAllCategories = async () => {
      const allCategories = await getCategories();
      if (allCategories) setCategories(allCategories);
    };

    const getCategoriesWithSub = async () => {
      const allCategoriesWitSub = await getCategoriesWithSubcategories();
      if (allCategoriesWitSub) setCategoriesWithSub(allCategoriesWitSub);
    };

    const getAllAdditives = async () => {
      const allAdditives = await getAdditives();
      if (allAdditives) setAdditives(allAdditives);
    };

    const getAllAllergens = async () => {
      const allAllergens = await getAllergens();
      if (allAllergens) setAllergens(allAllergens);
    };

    getAllCategories();
    getAllTags();
    getCategoriesWithSub();
    getAllAdditives();
    getAllAllergens();
  }, []);

  return (
    <RouterComponent
      products={products}
      brands={brands}
      categories={categories}
      categoriesWithSub={categoriesWithSub}
      tags={tags}
      additives={additives}
      allergens={allergens}
      isLoggedIn={isLoggedIn}
      userRole={userRole}
      onLoginFailure={onLoginFailure}
      onLoginSuccess={onLoginSuccess}
      onSignoutSuccess={onSignoutSuccess}
      loadBrands={loadBrands}
      loadProducts={loadProducts}
    />
  );
}

export default App;
