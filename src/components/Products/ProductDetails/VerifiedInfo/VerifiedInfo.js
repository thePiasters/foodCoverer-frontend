import { GoUnverified, GoVerified } from "react-icons/go";
import { Col, Button } from "react-bootstrap";
import { isAdamin } from "utils/login";
import api from "api/foodDbApi";

const VerifiedInfo = (props) => {
  const { product, role, callback } = props;

  function toggleVerify() {
    api
      .patch("/products/verify", product)
      .then((response) => callback(response.data));
  }
  return (
    <>
      {product.verified ? (
        <Col md={{ span: 5, offset: 7 }}>
          <p style={{ color: "green" }}>
            <GoVerified size={34} color="green" />
            <span style={{ marginLeft: "4%" }}>Data verified</span>
            {isAdamin(role) && (
              <Button
                style={{ marginLeft: "3%" }}
                variant="outline-danger"
                onClick={() => toggleVerify(product)}
              >
                Unverify
              </Button>
            )}
          </p>
        </Col>
      ) : (
        <Col md={{ span: 5, offset: 7 }}>
          <p style={{ color: "rgb(107, 104, 104)" }}>
            <GoUnverified size={34} />
            <span style={{ marginLeft: "3%" }}>Data not verified</span>
            {isAdamin(role) && (
              <Button
                style={{ marginLeft: "3%" }}
                variant="outline-info"
                onClick={() => toggleVerify(product)}
              >
                Verify
              </Button>
            )}
          </p>
        </Col>
      )}
    </>
  );
};
export default VerifiedInfo;
