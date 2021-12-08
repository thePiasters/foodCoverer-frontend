import { Row } from "react-bootstrap";
import { t } from "dictionaries/en";
const ProductIgredients = (props) => {
  const { ingredients } = props;
  const style = { margin: "4%" };
  return (
    <Row>
      <details>
        <summary>
          <em> {t.Products.ingredienst} </em>
        </summary>
        <div style={style}>
          <em>
            {ingredients
              ? ingredients.toLowerCase()
              : t.Products.ingredientsMissing}
          </em>
        </div>
      </details>
    </Row>
  );
};
export default ProductIgredients;
