import { Col, Container, Row, Image } from "react-bootstrap";
import nutriscore from "./nutriscore-logo.png";
import { MdArrowForwardIos } from "react-icons/md";
import "./NutriScoreInfo.scss";
import { t } from "dictionaries/en";

const NutriScoreInfo = () => {
  return (
    <Container id="nutri">
      <Row className="outer">
        <Col sm={6}>
          <Image src={nutriscore} />
        </Col>
        <Col sm={6}>
          <h4> {t.NutriScore.title}</h4>
          <Row className="inner">
            <hr class="hr-light" />
            <p>{t.NutriScore.description}</p>
            <ul>
              <li>
                <span className="green">{t.NutriScore.gradeA}</span>
                {t.NutriScore.gradeADesc}
              </li>
              <li>
                <span className="orange">{t.NutriScore.gradeE}</span>
                {t.NutriScore.gradeEDesc}
              </li>
            </ul>
            <p>{t.NutriScore.gradeDetermination}</p>
            <Col md={{ span: 4, offset: 8 }}>
              <p>
                <a id="nutri-score-info-link" href={t.NutriScore.link}>
                  <p>
                    {t.NutriScore.linkLabel}
                    <MdArrowForwardIos />
                  </p>
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default NutriScoreInfo;
