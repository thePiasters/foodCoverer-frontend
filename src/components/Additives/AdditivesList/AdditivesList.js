import AdditivesCircle from "../AdditiveCircle/AdditiveCircle";
import { capitalize } from "utils/stringUtil";
import { ListGroup, Row, Col } from "react-bootstrap";
import { GiEuropeanFlag } from "react-icons/gi";
import { t } from "dictionaries/en";
import "./AdditivesList.scss";

const AdditivesList = (props) => {
  const { additives } = props;

  return (
    <ListGroup id="addtives-list">
      {additives.map((additive, index) => (
        <ListGroup.Item
          className="list-item"
          style={{
            backgroundColor: index % 2 === 0 ? "#ffffe6" : "white",
          }}
        >
          <Row>
            <Col sm={1}>
              <AdditivesCircle
                safetyLevel={additive.safetyLevel}
                size={80}
                symbol={capitalize(additive.symbol)}
              ></AdditivesCircle>
            </Col>

            <Col md={{ span: 7, offset: 1 }}>
              <h5>{capitalize(additive.additiveName)}</h5>
              <p>
                {t.Additives.funtion} {additive.functionName}
                <details>
                  <summary>
                    <em>{t.Additives.desription}</em>
                  </summary>
                  <div>{additive.description}</div>
                </details>
              </p>
            </Col>
            <Col sm={1}>
              {additive.euApproved && (
                <GiEuropeanFlag size={25} color="#e3b40b" />
              )}
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default AdditivesList;
