import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { default as ReactSelect } from "react-select";
import { Row, Col } from "react-bootstrap";

const FilterDropdown = (props) => {
  const params = useParams();
  const [tagsSelectedOptions, setTagsSelectedOptions] = useState([]);
  const [allergensSelectedOptions, setAllergensSelectedOptions] = useState([]);
  const [additivesSelectedOptions, setAdditivesSelectedOptions] = useState([]);
  const [gradesSelectedOptions, setGradesSelectedOptions] = useState([]);
  const [brandsSelectedOptions, setBrandsSelectedOptions] = useState([]);

  function extractValuesFromDropdownSelect(elements) {
    const values = elements.map((elem) => {
      return elem.value;
    });
    return values;
  }

  useEffect(() => {
    setTagsSelectedOptions([]);
    setAllergensSelectedOptions([]);
    setAdditivesSelectedOptions([]);
    setGradesSelectedOptions([]);
    setBrandsSelectedOptions([]);
  }, [params]);

  useEffect(() => {
    props.handler(
      extractValuesFromDropdownSelect(allergensSelectedOptions),
      extractValuesFromDropdownSelect(gradesSelectedOptions),
      extractValuesFromDropdownSelect(tagsSelectedOptions),
      extractValuesFromDropdownSelect(additivesSelectedOptions),
      extractValuesFromDropdownSelect(brandsSelectedOptions)
    );
  }, [
    allergensSelectedOptions,
    tagsSelectedOptions,
    gradesSelectedOptions,
    additivesSelectedOptions,
    brandsSelectedOptions,
  ]);

  return (
    <details style={{ paddingTop: "1%" }}>
      <summary>
        <em> Select filters</em>
      </summary>
      <Row style={{ paddingTop: "1%" }}>
        <h5>Search...</h5>
      </Row>
      <Row style={{ paddingTop: "1%" }}>
        <Col>
          <ReactSelect
            placeholder="without selected allergens"
            isMulti
            options={props.allergens.map((elem) => {
              return { value: elem.id, label: elem.name };
            })}
            value={allergensSelectedOptions}
            onChange={(e) => setAllergensSelectedOptions(e)}
          />
        </Col>

        <Col>
          <ReactSelect
            id="tags-filter"
            placeholder="with selected tags"
            isMulti
            options={props.tags.map((elem) => {
              return { value: elem, label: elem.name };
            })}
            value={tagsSelectedOptions}
            onChange={(e) => setTagsSelectedOptions(e)}
          />
        </Col>

        <Col>
          <ReactSelect
            id="grades-filter"
            placeholder="with selected grades"
            isMulti
            options={props.grades.map((elem) => {
              return { value: elem, label: elem };
            })}
            value={gradesSelectedOptions}
            onChange={(e) => setGradesSelectedOptions(e)}
          />
        </Col>
        <Col>
          <ReactSelect
            placeholder="without selected additives"
            isMulti
            options={props.additives.map((elem) => {
              return { value: elem.id, label: elem.symbol };
            })}
            value={additivesSelectedOptions}
            onChange={(e) => setAdditivesSelectedOptions(e)}
          />
        </Col>
        <Col>
          <ReactSelect
            id="brands-filter"
            placeholder="with brands"
            isMulti
            options={props.brands.map((elem) => {
              return { value: elem.id, label: elem.name };
            })}
            value={brandsSelectedOptions}
            onChange={(e) => setBrandsSelectedOptions(e)}
          />
        </Col>
      </Row>
    </details>
  );
};
export default FilterDropdown;
