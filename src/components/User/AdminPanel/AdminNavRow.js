import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFastfood } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import AdminButton from "components/User/common/PanelButton/PanelButton";

import { t } from "dictionaries/en";

const AdminNavRow = () => {
  return (
    <Row>
      <Col sm={4}>
        <Link to={{ pathname: "/admin" }}>
          <AdminButton
            title={t.Panel.manageUsers}
            icon={<FiUsers size={50}></FiUsers>}
          />
        </Link>
      </Col>
      <Col sm={4}>
        <Link to={{ pathname: "/admin/products" }}>
          <AdminButton
            title={t.Panel.manageProducts}
            icon={<MdOutlineFastfood size={50}></MdOutlineFastfood>}
          />
        </Link>
      </Col>
      <Col sm={4}>
        <Link to={{ pathname: "/admin/brands" }}>
          <AdminButton
            title={t.Panel.manageBrands}
            icon={<BsShop size={50}></BsShop>}
          />
        </Link>
      </Col>
    </Row>
  );
};
export default AdminNavRow;
