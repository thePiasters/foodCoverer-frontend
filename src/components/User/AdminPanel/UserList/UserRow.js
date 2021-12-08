import { Row, Col, Collapse, Image } from "react-bootstrap";

import SwipeToSlide from "components/common/SwipeToSlide.js";
import ProductCard from "components/Products/common/ProductCard/ProductCard";
import DisplayUserProducts from "./DisplayUserProducts";
import ElevateButton from "./ElevateButton";
import ToggleActive from "./ToggleActive";
import "./UserList.scss";

const UserRow = (props) => {
  const {
    user,
    index,
    collapseIndex,
    setCollapseIndex,
    showCreatedProducts,
    userProducts,
    elevate,
    disableUser,
    enableUser,
  } = props;
  const rendered = userProducts.map((product) => {
    return <ProductCard product={product} cardSize="small" />;
  });
  return (
    <>
      <Row>
        <Col sm={1}>
          <Image
            src={user.userImageUrl}
            width={90}
            height={90}
            roundedCircle={true}
          />
        </Col>
        <Col md={{ span: 6, offset: 1 }}>
          <h5>{user.name}</h5>
          <p>Email: {user.email}</p>

          <DisplayUserProducts
            user={user}
            index={index}
            collapseIndex={collapseIndex}
            setCollapseIndex={setCollapseIndex}
            showCreatedProducts={showCreatedProducts}
          />
        </Col>

        <Col>
          <ElevateButton user={user} elevate={elevate} />
        </Col>
        <Col sm={2}>
          <ToggleActive
            user={user}
            disableUser={disableUser}
            enableUser={enableUser}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 9, offset: 3 }}>
          <Collapse in={index === collapseIndex}>
            <div id="products-collapse">
              <SwipeToSlide
                slidesNumber={3}
                rendered_cards={rendered}
                displayDots={false}
              />
            </div>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};
export default UserRow;
