import { Row, Form, Button } from "react-bootstrap";
import AlertInfo from "components/Products/ProductForm/AlertInfo";
import { TiDeleteOutline } from "react-icons/ti";
import { t } from "dictionaries/en";

import "./BrandList.scss";

function BrandForm(props) {
  const { addMode, isError, setIsError, setAddMode, submitAdd } = props;

  if (addMode)
    return (
      <Row id="add-brand-form">
        <Form.Group>
          <AlertInfo isError={isError} errorMsg={t.Panel.Brand.errorMsg_01} />
          <Form.Label>
            {t.Panel.Brand.addBrand}
            <Button
              variant="link"
              onClick={() => {
                setIsError(false);
                setAddMode(false);
              }}
            >
              <TiDeleteOutline size={24} />
            </Button>
          </Form.Label>
          <Form.Control
            placeholder={t.Panel.Brand.enterName}
            require
            onKeyDown={(e) => submitAdd(e, setIsError)}
          />
        </Form.Group>
      </Row>
    );
  return <></>;
}
export default BrandForm;
