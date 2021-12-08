import { Col, Row, Button } from "react-bootstrap";
import { GoVerified } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";

import DeleteButton from "components/common/DeleteButton";

import { capitalize } from "utils/stringUtil";
import { isAdamin } from "utils/login";
import { t } from "dictionaries/en";

import "./BrandList.scss";

const BrandRow = (props) => {
  const { index, brand, userRole } = props;
  const {
    startEditMode,
    editModeIndex,
    submitEdit,
    editableField,
    verifyBrand,
    deleteBrand,
  } = props;

  return (
    <Row>
      <Col md={{ span: 3, offset: 1 }}>
        {editModeIndex == index ? (
          <p>
            <input
              ref={editableField}
              defaultValue={brand.name}
              onKeyDown={(e) => submitEdit(e, brand)}
            ></input>
          </p>
        ) : (
          <p>{capitalize(brand.name)}</p>
        )}
      </Col>
      <Col md={{ span: 2, offset: 4 }}>
        {!brand.verified && isAdamin(userRole) ? (
          <Button variant="outline-success" onClick={() => verifyBrand(brand)}>
            {t.Panel.Brand.verify}
          </Button>
        ) : (
          brand.verified && (
            <>
              <GoVerified size={24} color="green" />
              <span id="verify-span">{t.Panel.Brand.verified}</span>
            </>
          )
        )}
      </Col>
      {(isAdamin(userRole) || !brand.verified) && (
        <>
          <Col md={{ span: 1, offset: 0 }}>
            <DeleteButton
              color={"#b0a7a8"}
              deleteMethod={deleteBrand}
              elem={brand}
            />
          </Col>
          <Col sm={1}>
            <MdModeEditOutline
              id="edit-button"
              color={"#b0a7a8"}
              size={28}
              onClick={() => startEditMode(index, brand)}
            />
          </Col>
        </>
      )}
    </Row>
  );
};
export default BrandRow;
