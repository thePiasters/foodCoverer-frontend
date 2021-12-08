import React, { useState, useRef } from "react";
import { ListGroup, Row, Form } from "react-bootstrap";
import "components/style/general.scss";

import UserRow from "./UserRow";
import { t } from "dictionaries/en";

const UserList = (props) => {
  const [collapseIndex, setCollapseIndex] = useState();
  const [userProducts, setUserProducts] = useState([]);
  const searchBarInput = useRef("");

  function backgroundColor(index) {
    return index % 2 === 0 ? "#f2f5f5" : "white";
  }

  function showCreatedProducts(index, user) {
    setCollapseIndex(index);
    if (props.products) {
      const filteredProducts = props.products.filter((product) => {
        return product.user != null && product.user.id == user.id;
      });
      setUserProducts(filteredProducts);
    }
  }

  return (
    <>
      <Row className="user-list-search">
        <Form.Control
          ref={searchBarInput}
          placeholder={t.Common.search}
          onChange={() => props.handleSearch(searchBarInput.current.value)}
        />
      </Row>
      <ListGroup>
        {props.users.map((user, index) => (
          <Row>
            <ListGroup.Item
              style={{
                paddingTop: "2%",
                backgroundColor: backgroundColor(index),
              }}
            >
              <UserRow
                user={user}
                index={index}
                collapseIndex={collapseIndex}
                setCollapseIndex={setCollapseIndex}
                showCreatedProducts={showCreatedProducts}
                userProducts={userProducts}
                elevate={props.elevate}
                disableUser={props.disableUser}
                enableUser={props.enableUser}
              />
            </ListGroup.Item>
          </Row>
        ))}
      </ListGroup>
    </>
  );
};
export default UserList;
