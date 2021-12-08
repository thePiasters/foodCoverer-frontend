import { Col } from "react-bootstrap";
import { t } from "dictionaries/en";
const ProdcutAdditives = (props) => {
  const { additives } = props;
  return (
    <Col>
      {additives.length > 0 ? (
        <>
          <em>{t.Products.additivesTitle}</em>
          {additives.map((additive) => (
            <div>{additive.symbol}</div>
          ))}
        </>
      ) : (
        <></>
      )}
    </Col>
  );
};
export default ProdcutAdditives;
