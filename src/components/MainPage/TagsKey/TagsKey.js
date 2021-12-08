import {
  Col,
  Row,
  Figure,
  Carousel,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { t } from "dictionaries/en";
import { getPictureUrl } from "utils/image";
import React from "react";
import "./TagsKey.scss";

const TagsKey = (props) => {
  const { tags } = props;

  function SixTags(props) {
    const { start, end } = props;
    return (
      <Row>
        {tags.slice(start, end).map((tag, index) => (
          <Col sm={4}>
            <Figure>
              {tag ? (
                <OverlayTrigger
                  trigger="hover"
                  placement={index == 5 || index == 2 ? "left" : "right"}
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Header as="h3">{tag.name}</Popover.Header>
                      <Popover.Body>{tag.description}</Popover.Body>
                    </Popover>
                  }
                >
                  <Figure.Image
                    width={130}
                    height={120}
                    src={getPictureUrl(tag.tagImageUrl)}
                  />
                </OverlayTrigger>
              ) : (
                <Figure.Image width={130} height={120} />
              )}
            </Figure>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <div className="bg1" id="tags">
      <h4> {t.Tags.title}</h4>
      <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
          <SixTags start={0} end={6} />
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <SixTags start={6} end={12} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <SixTags start={12} end={18} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default TagsKey;
