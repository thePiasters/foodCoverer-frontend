import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import * as Constants from "components/Constatns.js";

import "./Additives.css";

import AdditivesList from "components/Additives/AdditivesList/AdditivesList";
import AdditiveInfoToolTip from "components/Additives/AdditiveInfoToolTip";
import AdditivesFilterButtons from "components/Additives/AdditivesFilterButtons/AdditivesFilterButtons.js";

import { t } from "dictionaries/en";

const Additives = (props) => {
  const { additives } = props;
  const [showNegative, setShowNegative] = useState(false);
  const [showPositive, setShowPositive] = useState(false);
  const [additivesFiltered, setAdditivesFiltered] = useState(additives);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setAdditivesFiltered(additives);
  }, [props]);

  function checkForSearchTerm(additive) {
    if (searchTerm == "") return true;

    return (additive.name + " " + additive.symbol)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  }

  function checkForPositive(additive) {
    if (!showPositive) return true;
    return additive.safetyLevel === Constants.ADDITIVE_SAFETY_LEVEL_HIGH;
  }

  function checkForNegative(additive) {
    if (!showNegative) return true;
    return additive.safetyLevel === Constants.ADDITIVE_SAFETY_LEVEL_LOW;
  }

  function filter() {
    const filteredAdditives = additives.filter((additive) => {
      return (
        checkForSearchTerm(additive) &&
        checkForNegative(additive) &&
        checkForPositive(additive)
      );
    });
    setAdditivesFiltered(filteredAdditives);
  }

  useEffect(() => {
    filter();
  }, [showPositive, showNegative, searchTerm]);

  function filetrNegative() {
    setShowNegative(true);
    setShowPositive(false);
  }
  function filetrPositive() {
    setShowNegative(false);
    setShowPositive(true);
  }

  return (
    <div className="additives-bg main">
      <Container>
        <Row>
          <Col sm={10}>
            <h2 class="page-title">{t.Additives.title}</h2>
          </Col>
          <Col sm={2}>
            <AdditiveInfoToolTip />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              placeholder={t.Common.search}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>
        <AdditivesFilterButtons
          filetrNegative={filetrNegative}
          filetrPositive={filetrPositive}
          showNegative={showNegative}
          setShowNegative={setShowNegative}
          showPositive={showPositive}
          setShowPositive={setShowPositive}
        />
        <Row>
          {additivesFiltered && <AdditivesList additives={additivesFiltered} />}
        </Row>
      </Container>
    </div>
  );
};
export default Additives;
