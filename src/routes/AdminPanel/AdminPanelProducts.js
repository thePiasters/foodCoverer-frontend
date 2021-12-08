import { Container } from "react-bootstrap";
import PanelProducts from "components/User/common/PanelProducts";
import AdminNavRow from "components/User/AdminPanel/AdminNavRow";

const AdminPanelProducts = (props) => {
  const { products, reloadProducts, userRole } = props;
  return (
    <div className="main">
      <Container>
        <AdminNavRow />
        <PanelProducts
          products={products}
          reloadProducts={reloadProducts}
          userRole={userRole}
        />
      </Container>
    </div>
  );
};
export default AdminPanelProducts;
