import React, { Suspense } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
// import ProductCard from "../common/ProductCard/ProductCard";
import * as Constants from "components/Constatns.js";

import { List } from "react-virtualized";

const ProductCard = React.lazy(() =>
  import("components/Products/common/ProductCard/ProductCard")
);

const DisplayProducts = (props) => {
  const { products, userRole } = props;
  const style = { padding: "3%" };

  return (
    <Row id="all-products">
      {products.map((product) => (
        <Col sm={3} style={style}>
          <Suspense
            fallback={
              <div className="fallback-spinner">
                <Spinner animation="border" variant="secondary" />.
              </div>
            }
          >
            <ProductCard
              product={product}
              userRole={userRole}
              cardSize={Constants.LARGE}
              reloadProducts={props.reloadProducts}
            />
          </Suspense>
        </Col>
      ))}
    </Row>
  );
};
export default DisplayProducts;
