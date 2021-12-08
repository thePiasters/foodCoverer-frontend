import { Row, Col, Button } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import { t } from "dictionaries/en";

import "./AdditivesFilterButtons.scss";

const AdditivesFilterButtons = (props) => {
  const {
    filetrNegative,
    filetrPositive,
    showNegative,
    setShowNegative,
    showPositive,
    setShowPositive,
  } = props;
  return (
    <>
      <Row className="additives-filters-main">
        <Col sm={6}>
          <Button variant="outline-primary" onClick={filetrNegative}>
            {t.Additives.Fiters.negative}
          </Button>
        </Col>
        <Col sm={6}>
          <Button variant="outline-primary" onClick={filetrPositive}>
            {t.Additives.Fiters.positive}
          </Button>
        </Col>
      </Row>
      <Row className="additives-filters-show">
        <Col>
          {showNegative && (
            <Button
              variant="outline-secondary"
              onClick={() => setShowNegative(false)}
            >
              <span>{t.Additives.Fiters.buttonNegative}</span>
              <ImCross size={13} />
            </Button>
          )}
          {showPositive && (
            <Button
              variant="outline-secondary"
              onClick={() => setShowPositive(false)}
            >
              <span>{t.Additives.Fiters.buttonPositive}</span>
              <ImCross size={13} />
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};
export default AdditivesFilterButtons;
