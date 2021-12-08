import { Col, Container, Row, Button, Image } from "react-bootstrap";
import foodFacts from "./images/food_facts.png";
import logomaker from "./images/logomaker.png";
import freepik from "./images/freepik.png";
import "./Footer.scss";
import GoogleButton from "../../common/GoogleButton";
import { t } from "dictionaries/en";

const Footer = (props) => {
  return (
    <div className="footer_bg">
      <Container>
        <Row>
          <h4> {t.Footer.title}</h4>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <GoogleButton
              loginText={t.Footer.login}
              isLoggedIn={props.isLoggedIn}
              onLoginSuccess={props.onLoginSuccess}
              onLoginFailure={props.onLoginFailure}
              onSignoutSuccess={props.onSignoutSuccess}
            />
          </Col>
        </Row>

        <Row>
          <Col className="mg-top-5" md={{ span: 8, offset: 2 }}>
            <em>{t.Footer.powerdBy}</em>
            <hr class="hr-dark" />
          </Col>
        </Row>

        <Row>
          <Col className="mg-top-5" md={{ span: 4, offset: 0 }}>
            <Image src={logomaker} />
          </Col>
          <Col md={{ span: 4, offset: 0 }}>
            <Image src={foodFacts} />
          </Col>
          <Col md={{ span: 4, offset: 0 }}>
            <Image src={freepik} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
