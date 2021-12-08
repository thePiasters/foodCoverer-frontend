import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getEmptyProduct } from "utils/model";

import { t } from "dictionaries/en";

const AddProductButton = (props) => {
  const { isLoggedIn } = props;
  const history = useHistory();
  const product = getEmptyProduct();

  function addProduct() {
    history.push("/add/product");
  }

  function onSuccessLoginBeforProductAdd(res) {
    addProduct();
  }

  return (
    <div>
      {!isLoggedIn ? (
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          render={(renderProps) => (
            <Button
              variant="outline-secondary"
              id="add-product-button"
              onClick={renderProps.onClick}
            >
              <IoAddOutline size={25} />
              {t.Products.add}
            </Button>
          )}
          buttonText={t.Common.login}
          onSuccess={() => onSuccessLoginBeforProductAdd}
          onFailure={props.onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          uxMode="redirect"
          redirectUri="http://localhost:3000"
        />
      ) : (
        <Link to={{ pathname: `/add/product`, state: { product: product } }}>
          <Button variant="outline-secondary" id="add-product-button">
            {" "}
            <IoAddOutline size={25} />
            {t.Products.add}
          </Button>
        </Link>
      )}
    </div>
  );
};
export default AddProductButton;
