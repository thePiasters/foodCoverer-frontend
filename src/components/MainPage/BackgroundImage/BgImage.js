import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./BgImage.scss";
import logo from "./images/Logo.png";
import { t } from "dictionaries/en";

const BackgroundImagePage = () => {
  return (
    <div className="bg">
      <Container fluid>
        <Row>
          <Col sm={6}>
            <p id="main-page-title">
              <em>{t.Main.slogan}</em>
            </p>
            <hr class="hr-light" />
            <p> {t.Main.slogan}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Image src={logo} width={220} height={220} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BackgroundImagePage;
