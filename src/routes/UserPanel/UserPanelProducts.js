import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import api from "api/foodDbApi";
import PanelProducts from "components/User/common/PanelProducts";
import UserNavRow from "components/User/UserPanel/UserNavRow";

const UserPanelProducts = (props) => {
  const { userRole } = props;
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await api.get("/products/byUser");
    return response.data;
  };
  function loadProducts() {
    const getUsersProducts = async () => {
      const usersProducts = await getProducts();
      if (usersProducts) {
        setProducts(usersProducts);
      }
    };
    getUsersProducts();
  }
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="main">
      <Container>
        <UserNavRow />
        <PanelProducts
          products={products}
          reloadProducts={loadProducts}
          userRole={userRole}
        />
      </Container>
    </div>
  );
};
export default UserPanelProducts;
