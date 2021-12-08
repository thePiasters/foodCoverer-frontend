import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import api from "api/foodDbApi";
import UserNavRow from "components/User/UserPanel/UserNavRow";
import PanelBrands from "components/User/common/PanelBrands";

const UserPanelBrands = (props) => {
  const { userRole } = props;
  const [brands, setBrands] = useState([]);
  const getUserBrands = async () => {
    const response = await api.get("/brands/byUser");
    return response.data;
  };
  function loadBrands() {
    const getBrands = async () => {
      const usersBrand = await getUserBrands();
      if (usersBrand) {
        setBrands(usersBrand);
      }
    };
    getBrands();
  }
  useEffect(() => {
    loadBrands();
  }, []);
  return (
    <div className="main">
      <Container>
        <UserNavRow />
        <PanelBrands
          brands={brands}
          reloadBrands={loadBrands}
          userRole={userRole}
        />
        ;
      </Container>
    </div>
  );
};
export default UserPanelBrands;
