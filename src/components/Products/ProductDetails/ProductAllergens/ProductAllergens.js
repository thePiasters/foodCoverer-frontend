import { Row } from "react-bootstrap";
import { t } from "dictionaries/en";
const ProductAllergens = (props) => {
  const { allergens } = props;
  return (
    <Row>
      {allergens.length > 0 ? (
        <div>
          <em>{t.Products.allergensTitle}</em>
          {allergens.map((allergen) => (
            <span>{allergen.name} </span>
          ))}
        </div>
      ) : (
        <div>{t.Products.noAllergens}</div>
      )}
    </Row>
  );
};
export default ProductAllergens;
