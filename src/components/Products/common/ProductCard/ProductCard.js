import { Card, Button, Col } from "react-bootstrap";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

import api from "api/foodDbApi";
import EditButton from "../EditButton";
import DeleteButton from "../../../common/DeleteButton";
import { getProductPicturePath } from "utils/image";
import { isAdamin } from "utils/login";
import * as Constants from "components/Constatns.js";

import { t } from "dictionaries/en";

const ProductCard = (props) => {
  const { productName, image } = props.product;
  const { product, userRole, cardSize } = props;

  const grey = "#b0a7a8";

  function deleteProduct(product) {
    api.delete("/products/delete", { data: product }).then(function (response) {
      props.reloadProducts();
    });
  }
  const className =
    cardSize === Constants.LARGE ? "card-main large" : "card-main small";

  return (
    <Card className={className}>
      <Card.Body
        className="card_bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${getProductPicturePath(
            image
          )})`,
        }}
      >
        <Col md={{ span: 2, offset: 10 }}>
          {isAdamin(userRole) && (
            <>
              <EditButton product={product} color={grey} />
              <DeleteButton
                deleteMethod={deleteProduct}
                color={grey}
                elem={product}
              />
            </>
          )}
        </Col>
      </Card.Body>
      <Card.Footer className="product-card-footer">
        <p>{productName} </p>
        <Link
          to={{
            pathname: `/productDetails/${props.product.productId}`,
            state: { product: props.product, role: userRole },
          }}
        >
          <Button>{t.Products.viewDetails}</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
