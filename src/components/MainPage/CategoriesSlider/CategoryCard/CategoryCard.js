import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { toLowerCaseReplaceSpaces } from "utils/stringUtil";
import { t } from "dictionaries/en";
import { getPictureUrl } from "utils/image";

import "./CategoryCard.scss";

const CategoryCard = (props) => {
  const { category } = props;
  const url = getPictureUrl(category.categoryImageUrl);

  return (
    <Card
      className="category-card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${url})`,
      }}
    >
      <Card.Body>
        <h4>{category.name}</h4>
      </Card.Body>
      <Card.Footer class="footer">
        <Link
          to={{
            pathname: `/products/${toLowerCaseReplaceSpaces(category.name)}`,
            state: { category, category },
          }}
        >
          <Button variant="info">{t.CategoryCard.browse}</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CategoryCard;
