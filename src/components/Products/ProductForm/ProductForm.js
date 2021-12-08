import React, { useState, useEffect } from "react";
import { Form, Container, Row, Dropdown } from "react-bootstrap";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

import "./ProductForm.scss";
import NutriDataForm from "./NutriDataForm";
import { Redirect } from "react-router-dom";
import Dropdowns from "./Dropdowns";
import * as Constants from "components/Constatns";

import { getEmptyProduct, getEmptyNutriData } from "utils/model";
import FormView from "./FormView";
import { processForm } from "utils/form";
import { validate } from "./Validator";

import { readProductValues, extractValuesFromDropdownSelect } from "./helpers";

import AlertInfo from "./AlertInfo";
import PictureForm from "./PictureForm";

const ProductForm = (props) => {
  const mode = props.location.pathname.includes("edit")
    ? Constants.FORM_MODE_UPDATE
    : Constants.FORM_MODE_CREATE;

  const product = props.location.state
    ? props.location.state.product
    : getEmptyProduct();

  const [redirect, setRedirect] = useState(false);
  const [returnData, setReturnData] = useState();

  const { tags, allergens, additives, categories, brands } = props;
  const [subcategories, setSubcategories] = useState();
  const [viewNutri, setViewNutri] = useState();

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [tagsSelectedOptions, setTagsSelectedOptions] = useState([]);
  const [allergensSelectedOptions, setAllergensSelectedOptions] = useState([]);
  const [additivesSelectedOptions, setAdditivesSelectedOptions] = useState([]);
  const [brandSelectedOption, setBrandSelectedOption] = useState();
  const [categorySelectedOption, setCategorySelectedOption] = useState();
  const [subcategorySelectedOption, setSubcategorySelectedOption] = useState();

  const [barcode, setBarcode] = useState(product.productId);
  const [name, setName] = useState(product.productName);

  const [quantity, setQuantity] = useState(product.quantity);
  const [ingredients, setIngredients] = useState(product.ingredients);
  const [selectedFile, setSelectedFile] = useState();

  const [imageSource, setImageSource] = useState(Constants.IMAGE_SOURCE_SERVER);
  const [link, setLink] = useState();

  const renderCategoryList = Object.entries(categories).map(
    ([category, subcategories]) => {
      return { label: category, value: category, subcategories: subcategories };
    }
  );

  function categorySelectionHandler(e) {
    setCategorySelectedOption(e);
    setSubcategorySelectedOption(null);
    const subcategoriesValues = e.subcategories.map((subcategroy) => {
      return { value: subcategroy, label: subcategroy.name };
    });
    setSubcategories(subcategoriesValues);
  }

  useEffect(() => {
    readProductValues(
      product,
      setTagsSelectedOptions,
      setAllergensSelectedOptions,
      setAdditivesSelectedOptions,
      setBrandSelectedOption,
      setCategorySelectedOption,
      setSubcategorySelectedOption
    );
  }, []);

  function redirectAfterSubmit(response) {
    const productData = response.data;
    setReturnData(productData);
    setRedirect(true);
  }

  function handleError(msg) {
    setIsError(true);
    window.scrollTo(0, 0);
    setErrorMsg(msg);
  }

  function submitProduct(event, nutriData) {
    event.preventDefault();

    const result = validate(
      barcode,
      name,
      selectedFile,
      subcategorySelectedOption,
      quantity,
      ingredients,
      tagsSelectedOptions,
      nutriData,
      link
    );
    setIsError(result.isError);
    setErrorMsg(result.errMsg);
    if (result.isError) {
      window.scrollTo(0, 0);
      return;
    }
    if (!result.isError) {
      processForm(
        barcode,
        name,
        brandSelectedOption ? brandSelectedOption.value : null,
        subcategorySelectedOption.value,
        quantity,
        ingredients,
        extractValuesFromDropdownSelect(tagsSelectedOptions),
        extractValuesFromDropdownSelect(allergensSelectedOptions),
        extractValuesFromDropdownSelect(additivesSelectedOptions),
        nutriData,
        selectedFile,
        redirectAfterSubmit,
        product.image,
        product.user,
        imageSource,
        link,
        mode,
        handleError
      );
    }
  }

  if (redirect) {
    return (
      <Redirect
        push
        to={{
          pathname: `/productDetails/${barcode}`,
          state: { product: returnData },
        }}
      />
    );
  } else
    return (
      <div>
        <Container className="form-container">
          <div className="wrapper">
            <Row>
              <h2 class="page-title">Provide product data</h2>
            </Row>
            <Row>
              <AlertInfo isError={isError} errorMsg={errorMsg} />
            </Row>
            <Form id="create-product-form" onSubmit={submitProduct}>
              <FormView
                brands={brands}
                ingredients={ingredients}
                setIngredients={setIngredients}
                quantity={quantity}
                setQuantity={setQuantity}
                subcategories={subcategories}
                subcategorySelectedOption={subcategorySelectedOption}
                setSubcategorySelectedOption={setSubcategorySelectedOption}
                categorySelectionHandler={categorySelectionHandler}
                categorySelectedOption={categorySelectedOption}
                setBrandSelectedOption={setBrandSelectedOption}
                brandSelectedOption={brandSelectedOption}
                barcode={barcode}
                setBarcode={setBarcode}
                setName={setName}
                name={name}
                renderCategoryList={renderCategoryList}
              />

              <PictureForm
                imageSource={imageSource}
                setSelectedFile={setSelectedFile}
                setImageSource={setImageSource}
                setLink={setLink}
              />

              <Dropdowns
                additives={additives}
                allergens={allergens}
                tags={tags}
                tagsSelectedOptions={tagsSelectedOptions}
                additivesSelectedOptions={additivesSelectedOptions}
                allergensSelectedOptions={allergensSelectedOptions}
                setTagsSelectedOptions={setTagsSelectedOptions}
                setAllergensSelectedOptions={setAllergensSelectedOptions}
                setAdditivesSelectedOptions={setAdditivesSelectedOptions}
              />
              {!viewNutri ? (
                <p onClick={() => setViewNutri(true)}>
                  <IoMdArrowDropright />
                  <em>Provide nutritional values</em>
                </p>
              ) : (
                <p onClick={() => setViewNutri(false)}>
                  <IoMdArrowDropdown />
                  <em>Provide nutritional values</em>
                </p>
              )}

              <NutriDataForm
                nutriData={
                  product.nutritionData
                    ? product.nutritionData
                    : getEmptyNutriData()
                }
                viewNutri={viewNutri}
                formHandler={submitProduct}
              />
            </Form>
          </div>
        </Container>
      </div>
    );
};
export default ProductForm;
