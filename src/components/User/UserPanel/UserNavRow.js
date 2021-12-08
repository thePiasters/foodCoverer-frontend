import { Row, Col } from "react-bootstrap";
import AdminButton from "../common/PanelButton/PanelButton";
import { Link } from "react-router-dom";
import { MdOutlineFastfood } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { t } from "dictionaries/en";

const UserNavRow = () => {
  return (
    <Row id="user-panel-nav">
      <Col sm={4}>
        <Link to={{ pathname: "/user" }}>
          <AdminButton
            title="Browse Products"
            icon={<MdOutlineFastfood size={50}></MdOutlineFastfood>}
          />
        </Link>
      </Col>
      <Col sm={4}>
        <Link to={{ pathname: "/user/brands" }}>
          <AdminButton
            title={t.Panel.browseBrands}
            icon={<BsShop size={50}></BsShop>}
          />
        </Link>
      </Col>
    </Row>
  );
};
export default UserNavRow;
