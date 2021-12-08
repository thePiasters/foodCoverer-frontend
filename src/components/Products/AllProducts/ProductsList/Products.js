import React, { useState, useRef, useEffect, Suspense } from "react";
import { Col, Container, Row, Form, Spinner } from "react-bootstrap";
import NavSide from "components/common/NavSide/NavSide";
import ProductsBreadcrumbs from "components/Products/common/ProductsBreadcrumbs";
import "./Products.scss";
import FilterDropdown from "components/Products/FilterDropdown";

import { filterProductsByTags } from "utils/filters";
import AddProductButton from "../AddProductButton";
import { fiterProductNameByTerm } from "utils/filters";
import { t } from "dictionaries/en";

const DisplayProducts = React.lazy(() =>
  import("components/Products/AllProducts/DispalyProducts")
);

const Products = (props) => {
  const { currentCategory, currentSubcategory } = props;
  const {
    tags,
    products,
    categories,
    brands,
    additives,
    allergens,
    isLoggedIn,
    userRole,
  } = props;

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchBarReasult, setSearchBarResult] = useState([]);

  const inputEl = useRef("");
  const grades = ["a", "b", "c", "d", "e"];

  const getSerachData = async (allergens, grades, tags, additives, brands) => {
    const filterResults = filterProductsByTags(
      products,
      tags,
      brands,
      grades,
      allergens,
      additives
    );
    if (filterResults) {
      setFilteredProducts(filterResults);
      setSearchBarResult(filterResults);
    }
  };

  const searchBarHandler = () => {
    var searchTerm = inputEl.current.value;
    const filtered = fiterProductNameByTerm(filteredProducts, searchTerm);
    setSearchBarResult(filtered);
  };

  useEffect(() => {
    setFilteredProducts(products);
    setSearchBarResult(products);
  }, [products]);

  const dropDownSerachHandler = (
    allergens,
    grades,
    tags,
    additives,
    brands
  ) => {
    if (
      allergens.length != 0 ||
      grades.length != 0 ||
      tags.length != 0 ||
      additives.length != 0 ||
      brands.length != 0
    ) {
      getSerachData(allergens, grades, tags, additives, brands);
    } else {
      setFilteredProducts(products);
      setSearchBarResult(products);
    }
  };

  return (
    <Container className="products_bg">
      <Row>
        <Col sm={1} className="pdt_2p">
          <NavSide categories={categories} />
        </Col>
        <Col md={{ span: 8, offset: 1 }}>
          <ProductsBreadcrumbs
            currentCategory={currentCategory}
            currentSubcategory={currentSubcategory}
          ></ProductsBreadcrumbs>

          <Row>
            <Col>
              <h2 class="page-title">{t.Products.title}</h2>
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
              <AddProductButton
                isLoggedIn={isLoggedIn}
                onLoginSuccess={props.onLoginSuccess}
              />
            </Col>
          </Row>

          <Row className="pdt_2p">
            <Form.Control
              ref={inputEl}
              placeholder={t.Common.search}
              type="text"
              className="prompt"
              onChange={searchBarHandler}
            />
          </Row>

          <FilterDropdown
            additives={additives}
            allergens={allergens}
            grades={grades}
            tags={tags}
            brands={brands}
            handler={dropDownSerachHandler}
          ></FilterDropdown>

          <Row className="pdt_2p">
            <Suspense
              fallback={
                <div className="fallback-spinner">
                  <Spinner animation="border" variant="secondary" />.
                </div>
              }
            >
              <DisplayProducts
                products={searchBarReasult}
                userRole={userRole}
                reloadProducts={props.reloadProducts}
              ></DisplayProducts>
            </Suspense>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Products;
