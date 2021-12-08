import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Form, ListGroup, Button } from "react-bootstrap";

import { IoAddOutline } from "react-icons/io5";

import api from "api/foodDbApi";

import AlertInfo from "components/Products/ProductForm/AlertInfo";
import BrandForm from "./BrandForm";
import BrandRow from "./BrandRow";

import { isAdamin } from "utils/login";
import { isBrandValid } from "utils/brandValidator";
import { t } from "dictionaries/en";

const BrandsList = (props) => {
  const { brands, submitAdd, userRole } = props;
  const searchBarInput = useRef("");
  const editableField = useRef("");

  const [editModeIndex, setEditModeIndex] = useState();
  const [addMode, setAddMode] = useState(false);

  const [isError, setIsError] = useState(false);
  const [isEditError, setIsEditError] = useState(false);

  useEffect(() => {
    setEditModeIndex();
    setIsError(false);
    setIsEditError(false);
  }, [props]);

  function startEditMode(index, brand) {
    if (!isAdamin(userRole) && brand.verified) {
      alert("You cannot modify data already verified");
    } else {
      setEditModeIndex(index);
    }
  }

  function submitEdit(e, brand) {
    if (e.keyCode == 13) {
      brand.name = editableField.current.value;
      if (!isBrandValid(editableField.current.value)) {
        setIsEditError(true);
        return;
      }
      setIsEditError(false);
      api
        .patch("/brands/update", brand)
        .then(function (response) {
          setEditModeIndex();
        })
        .catch(function (error) {
          if (error.response) {
            setIsEditError(true);
          }
        });
    }
  }

  return (
    <>
      <Row className="brands-list-main">
        <Col md={{ span: 4, offset: 10 }}>
          <Button
            variant="outline-secondary"
            id="add-brand-button"
            onClick={() => setAddMode(true)}
          >
            <IoAddOutline size={25} />
            {t.Panel.Brand.addBrand}
          </Button>
        </Col>
      </Row>
      <Row className="brand-search-bar-wrapper">
        <Col>
          <Form.Control
            ref={searchBarInput}
            placeholder={t.Common.search}
            onChange={() => props.handleSearch(searchBarInput.current.value)}
          />
        </Col>
      </Row>
      <BrandForm
        addMode={addMode}
        isError={isError}
        setIsError={setIsError}
        setAddMode={setAddMode}
        submitAdd={submitAdd}
      />
      <Row>
        <Col>
          <AlertInfo
            isError={isEditError}
            errorMsg={t.Panel.Brand.errorMsg_02}
          />
        </Col>
      </Row>
      <ListGroup id="brands-list">
        {brands.map((brand, index) => (
          <ListGroup.Item
            style={{
              paddingTop: "1.5%",
              backgroundColor: index % 2 === 0 ? "#f2f5f5" : "white",
              fontSize: "1.3em",
            }}
          >
            <BrandRow
              brand={brand}
              index={index}
              startEditMode={startEditMode}
              editModeIndex={editModeIndex}
              submitEdit={submitEdit}
              userRole={userRole}
              editableField={editableField}
              verifyBrand={props.verifyBrand}
              deleteBrand={props.deleteBrand}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default BrandsList;
