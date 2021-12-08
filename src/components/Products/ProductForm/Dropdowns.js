import { Form, Row } from "react-bootstrap";
import { default as ReactSelect } from "react-select";

const Dropdowns = (props) => {
  const {
    additives,
    allergens,
    tags,
    tagsSelectedOptions,
    additivesSelectedOptions,
    allergensSelectedOptions,
    setTagsSelectedOptions,
    setAllergensSelectedOptions,
    setAdditivesSelectedOptions,
  } = props;
  return (
    <>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Tags</Form.Label>

          <ReactSelect
            isMulti
            value={tagsSelectedOptions}
            options={tags.map((elem) => {
              return { value: elem, label: elem.name };
            })}
            onChange={(e) => setTagsSelectedOptions(e)}
          />
        </Form.Group>
      </Row>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Allergen</Form.Label>

          <ReactSelect
            isMulti
            value={allergensSelectedOptions}
            options={allergens.map((elem) => {
              return { value: elem, label: elem.name };
            })}
            onChange={(e) => setAllergensSelectedOptions(e)}
          />
        </Form.Group>
      </Row>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Additives</Form.Label>

          <ReactSelect
            isMulti
            value={additivesSelectedOptions}
            options={additives.map((elem) => {
              return { value: elem, label: elem.symbol };
            })}
            onChange={(e) => setAdditivesSelectedOptions(e)}
          />
        </Form.Group>
      </Row>
    </>
  );
};
export default Dropdowns;
