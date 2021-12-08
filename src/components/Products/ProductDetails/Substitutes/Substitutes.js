import SwipeToSlide from "components/common/SwipeToSlide.js";
import ProductCard from "components/Products/common/ProductCard/ProductCard";
import { Row } from "react-bootstrap";

import * as Constants from "components/Constatns.js";

import { t } from "dictionaries/en";

const Substitutes = (props) => {
  const { substitutes } = props;
  return (
    <Row className="produt-details-subs">
      {substitutes && substitutes.length > 0 ? (
        <>
          <h3>{t.Products.substitutes}</h3>
          <SwipeToSlide
            rendered_cards={substitutes.map((product) => {
              return (
                <ProductCard product={product} cardSize={Constants.LARGE} />
              );
            })}
            display_cards={substitutes}
            slidesNumber={4}
            displayDots={true}
          />
        </>
      ) : (
        ""
      )}
    </Row>
  );
};
export default Substitutes;
