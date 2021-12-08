import { Col, Container, Row } from "react-bootstrap";
import SwipeToSlide from "../../common/SwipeToSlide";
import CategoryCard from "./CategoryCard/CategoryCard";
import "./CategoriesSlider.scss";

const CategoriesSlider = (props) => {
  const { categories } = props;
  const renderedCards = categories.map((category) => {
    return <CategoryCard category={category}></CategoryCard>;
  });

  return (
    <Container fluid>
      <Row id="categories" className="slider-wrapper">
        <Col md={{ span: 10, offset: 1 }}>
          <SwipeToSlide
            display_cards={categories}
            rendered_cards={renderedCards}
            slidesNumber={5}
            displayDots={true}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default CategoriesSlider;
