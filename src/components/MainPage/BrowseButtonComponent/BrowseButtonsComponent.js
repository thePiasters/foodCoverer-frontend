import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import truck from "./images/truck.png";
import { ImLeaf } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import "./BrowseButtonsComponent.scss";
import { t } from "dictionaries/en";

const BrowseButtonsComponent = () => {
  function ButtonRow(props) {
    const { icon, text, path } = props;
    return (
      <Row className="button-wrapper">
        <Col>
          <Link to={path}>
            <Button variant="info">
              <>{icon}</>
              <span>{text}</span>
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }

  return (
    <Container id="truck_component">
      <Row className="box-shadow">
        <Col className="left-column" sm={6}>
          <Image src={truck} style={{ height: "100%" }} />
        </Col>
        <Col className="column-right" sm={6}>
          <ButtonRow
            icon={<BsSearch size={35} />}
            text={t.BrowseButtonsComponent.findProducts}
            path="/products"
          />

          <ButtonRow
            icon={<ImLeaf size={35} />}
            text={t.BrowseButtonsComponent.findAdditives}
            path="/additives"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default BrowseButtonsComponent;
