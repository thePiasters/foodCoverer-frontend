import React, { useState } from "react";
import { Form, Col, Button, Collapse, Row } from "react-bootstrap";
import { t } from "dictionaries/en";

const NutriDataForm = (props) => {
  const { nutriData, viewNutri } = props;

  const [energy, setEnergy] = useState(nutriData.energyKcal);
  const [fat, setFat] = useState(nutriData.fat);
  const [carbohydrates, setCarbohydrates] = useState(nutriData.carbohydrates);
  const [salt, setSalt] = useState(nutriData.salt);
  const [sugar, setSugar] = useState(nutriData.sugars);
  const [fiber, setFiber] = useState(nutriData.fiber);
  const [protein, setProtein] = useState(nutriData.proteins);
  const [fruits, setFruits] = useState(nutriData.fruitVegetablesNuts);
  const [sodium, setSodium] = useState(nutriData.sodium);
  const [saturatedFat, setSaturatedFat] = useState(nutriData.saturatedFat);

  function submitForm(event) {
    const nutri_data = {
      carbohydrates: carbohydrates,
      energyKcal: energy,
      fat: fat,
      fiber: fiber,
      fruitVegetablesNuts: fruits,
      proteins: protein,
      salt: salt,
      saturatedFat: saturatedFat,
      sodium: sodium,
      sugars: sugar,
    };
    props.formHandler(event, nutri_data);
  }

  return (
    <>
      <Collapse in={viewNutri}>
        <Row className="pd-3p" id="nutri-data-form">
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Energy</Form.Label>
              <Form.Control
                placeholder="Enter [kcal] per 100g "
                type="number"
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fat</Form.Label>
              <Form.Control
                placeholder="Enter fat value per 100g "
                type="number"
                value={fat}
                onChange={(e) => setFat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Carbohydrates</Form.Label>
              <Form.Control
                placeholder="Enter carbohydrates value per 100g "
                type="number"
                value={carbohydrates}
                onChange={(e) => setCarbohydrates(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Salt</Form.Label>
              <Form.Control
                placeholder="Enter salt value per 100g "
                type="number"
                value={salt}
                onChange={(e) => setSalt(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sodium</Form.Label>
              <Form.Control
                placeholder="Enter salt value per 100g "
                type="number"
                value={sodium}
                onChange={(e) => setSodium(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Sugar</Form.Label>
              <Form.Control
                placeholder="Enter sugar per 100g "
                type="number"
                value={sugar}
                onChange={(e) => setSugar(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fiber</Form.Label>
              <Form.Control
                placeholder="Enter fiber value per 100g "
                type="number"
                value={fiber}
                onChange={(e) => setFiber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Protein</Form.Label>
              <Form.Control
                placeholder="Enter protein value per 100g "
                type="number"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fruits, Vegetables, or Nuts</Form.Label>
              <Form.Control
                placeholder="Enter protein value per 100g "
                type="number"
                value={fruits}
                onChange={(e) => setFruits(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Saturated Fats</Form.Label>
              <Form.Control
                placeholder="Enter salt value per 100g "
                type="number"
                value={saturatedFat}
                onChange={(e) => setSaturatedFat(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Collapse>
      <Button variant="primary" type="submit" onClick={(e) => submitForm(e)}>
        {t.Common.submit}
      </Button>
    </>
  );
};
export default NutriDataForm;
