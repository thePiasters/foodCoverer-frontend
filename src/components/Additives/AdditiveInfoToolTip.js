import {
  Row,
  Col,
  Container,
  Button,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";

import { BsCircleFill } from "react-icons/bs";
import { GiEuropeanFlag } from "react-icons/gi";

import { t } from "dictionaries/en";
const yellow_eu = "#e3b40b";
const grey = "#c4c4c4";
const red = "#ff4d4d";
const green = "#88d654";
const yellow_medium = "#ffc34d";

const AdditiveInfoToolTip = () => {
  return (
    <OverlayTrigger
      trigger="click"
      key="bottom"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Header as="h3">
            {t.Additives.Tooltip.descriptionKey}
          </Popover.Header>
          <Popover.Body>
            <Container>
              <Row>
                <Col sm={1}>
                  <BsCircleFill color={green} />
                </Col>
                <Col sm={10}>{t.Additives.Tooltip.safe}</Col>
              </Row>
              <hr></hr>
              <Row>
                <Col sm={1}>
                  <BsCircleFill color={yellow_medium} />
                </Col>
                <Col sm={10}>{t.Additives.Tooltip.medium}</Col>
              </Row>
              <hr></hr>
              <Row>
                <Col sm={1}>
                  <BsCircleFill color={red} />
                </Col>
                <Col sm={9}>{t.Additives.Tooltip.harmfull}</Col>
              </Row>
              <hr></hr>
              <Row>
                <Col sm={1}>
                  <BsCircleFill color={grey} />
                </Col>
                <Col sm={9}>{t.Additives.Tooltip.noData}</Col>
              </Row>
              <hr></hr>
              <Row>
                <Col sm={1}>
                  <GiEuropeanFlag color={yellow_eu} />
                </Col>
                <Col sm={9}>{t.Additives.Tooltip.eu}</Col>
              </Row>
            </Container>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="link">{t.Additives.Tooltip.viewKey}</Button>
    </OverlayTrigger>
  );
};
export default AdditiveInfoToolTip;
