import { Row, Col, Figure } from "react-bootstrap";
import { getPictureUrl } from "utils/image";
import { toLowerCaseReplaceSpaces } from "utils/stringUtil";

const ProductTags = (props) => {
  const { tags } = props;
  return (
    <Row style={{ marginTop: "4%" }} id="product-details-tags">
      {tags.map((tag) => (
        <Col sm={2}>
          <Figure>
            {tag ? (
              <Figure.Image
                id={"product-tag-" + toLowerCaseReplaceSpaces(tag.name)}
                width={130}
                height={120}
                src={getPictureUrl(tag.tagImageUrl)}
              />
            ) : (
              <Figure.Image width={130} height={120} />
            )}
          </Figure>
        </Col>
      ))}
    </Row>
  );
};
export default ProductTags;
