import { Container } from "react-bootstrap";
import PanelBrands from "components/User/common/PanelBrands";
import AdminNavRow from "components/User/AdminPanel/AdminNavRow";

const AdminPanelBrands = (props) => {
  const { brands, reloadBrands, userRole } = props;

  return (
    <div className="main">
      <Container>
        <AdminNavRow />
        <PanelBrands
          brands={brands}
          reloadBrands={reloadBrands}
          userRole={userRole}
        />
      </Container>
    </div>
  );
};
export default AdminPanelBrands;
