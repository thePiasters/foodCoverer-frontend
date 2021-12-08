import { Form, Row } from "react-bootstrap";
import { default as ReactSelect } from "react-select";

const FormView = (props) => {
  const {
    brands,
    ingredients,
    setIngredients,
    quantity,
    setQuantity,
    subcategories,
    subcategorySelectedOption,
    setSubcategorySelectedOption,
    categorySelectionHandler,
    categorySelectedOption,
    setBrandSelectedOption,
    brandSelectedOption,
    barcode,
    setBarcode,
    setName,
    name,
    renderCategoryList,
  } = props;
  return (
    <>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Barcode:</Form.Label>
          <Form.Control
            placeholder="Enter numeric value barcode"
            required
            type="number"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            disabled={window.location.href.includes("edit")}
          />
        </Form.Group>
      </Row>
      <Row className="pd-3p">
        <Form.Group>
          <Form.Label>Product name</Form.Label>
          <Form.Control
            placeholder="Enter product name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>

          <ReactSelect
            placeholder="Start typing..."
            value={brandSelectedOption}
            options={brands.map((elem) => {
              return { value: elem, label: elem.name };
            })}
            onChange={(e) => setBrandSelectedOption(e)}
          />
        </Form.Group>
      </Row>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Select category</Form.Label>
          <ReactSelect
            options={renderCategoryList}
            required
            value={categorySelectedOption}
            onChange={(e) => categorySelectionHandler(e)}
          />
        </Form.Group>
      </Row>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Select subcategory</Form.Label>

          {subcategories || subcategorySelectedOption ? (
            <ReactSelect
              options={subcategories}
              value={subcategorySelectedOption}
              onChange={(e) => setSubcategorySelectedOption(e)}
            />
          ) : (
            <ReactSelect options={subcategories} isDisabled />
          )}
        </Form.Group>
      </Row>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            placeholder="Enter serving quantity"
            required
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            placeholder="Paste ingredients here"
            as="textarea"
            rows={4}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </Form.Group>
      </Row>
    </>
  );
};
export default FormView;
