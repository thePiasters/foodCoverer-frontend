import React, { useRef } from "react";
import { ListGroup, Row, Col, Button, Form } from "react-bootstrap";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";

import EditButton from "components/Products/common/EditButton";
import DeleteButton from "../../common/DeleteButton";
import { isAdamin } from "utils/login";

const ProductsList = (props) => {
  const { userRole } = props;
  const searchBarInput = useRef("");

  return (
    <>
      <Row style={{ paddingTop: "4%" }}>
        <Form.Control
          ref={searchBarInput}
          placeholder="Search by name..."
          onChange={() => props.handleSearch(searchBarInput.current.value)}
        />
      </Row>
      <ListGroup>
        {props.products.map((product, index) => (
          <Row>
            <ListGroup.Item
              style={{
                paddingTop: "1.5%",
                backgroundColor: index % 2 === 0 ? "#f2f5f5" : "white",
              }}
            >
              <Row>
                <Col md={{ span: 3, offset: 1 }}>
                  <h5>{product.productName}</h5>
                  {product.user ? (
                    <p> Creator: {product.user.name}</p>
                  ) : (
                    <p> Creator: unknown</p>
                  )}

                  {product.brand ? (
                    <p> Brand: {product.brand.name}</p>
                  ) : (
                    <p> Brand: unknown</p>
                  )}
                </Col>
                <Col sm={2}>
                  {product.verified && (
                    <>
                      <GoVerified size={24} color="green" />
                      <span style={{ marginLeft: "4%", fontSize: "0.7em" }}>
                        Product verified
                      </span>
                    </>
                  )}
                </Col>
                <Col md={{ span: 1, offset: 3 }}>
                  {(!product.verified || isAdamin(userRole)) && (
                    <>
                      <EditButton product={product} color={"#b0a7a8"} />

                      <DeleteButton
                        color={"#b0a7a8"}
                        deleteMethod={props.deleteProduct}
                        elem={product}
                      />
                    </>
                  )}
                </Col>
                <Col sm={2}>
                  <Link
                    to={{
                      pathname: `/productDetails/${product.productId}`,
                      state: { product: product },
                    }}
                  >
                    <Button variant="outline-success">View details</Button>
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
          </Row>
        ))}
      </ListGroup>
    </>
  );
};
export default ProductsList;
