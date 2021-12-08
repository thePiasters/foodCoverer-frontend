import { Row, Breadcrumb } from "react-bootstrap";
import { toLowerCaseReplaceSpaces } from "utils/stringUtil";
import { Link } from "react-router-dom";

const ProductsBreadcrumbs = (props) => {
  const { productName, currentCategory, currentSubcategory } = props;
  const visibility = currentCategory ? "visible" : "hidden";
  const style = {
    visibility: visibility,
    paddingRight: "6%",
    paddingTop: currentCategory ? "10%" : "5%",
    paddingBottom: "4%",
  };

  function getBreadCrumbs() {
    if (currentCategory && !currentSubcategory) {
      return <Breadcrumb.Item active>{currentCategory.name}</Breadcrumb.Item>;
    } else if (currentCategory && currentSubcategory && !productName) {
      return (
        <>
          <Breadcrumb.Item>
            <Link
              to={{
                pathname: `/products/${currentCategory.name}`,
                state: { category: currentCategory },
              }}
            >
              {currentCategory.name}
            </Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>{currentSubcategory.name}</Breadcrumb.Item>
        </>
      );
    } else if (currentCategory && currentSubcategory && productName) {
      return (
        <>
          <Breadcrumb.Item>
            <Link
              to={{
                pathname: `/products/${currentCategory.name}`,
                state: { category: currentCategory },
              }}
            >
              {currentCategory.name}
            </Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link
              to={{
                pathname: `/products/${currentCategory.name}/${currentSubcategory.name}`,
                state: { subcategory: currentSubcategory },
              }}
            >
              {currentSubcategory.name}
            </Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>{productName}</Breadcrumb.Item>
        </>
      );
    }
  }
  return (
    <Row style={style}>
      <Breadcrumb>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>

        {getBreadCrumbs()}
      </Breadcrumb>
    </Row>
  );
};
export default ProductsBreadcrumbs;
