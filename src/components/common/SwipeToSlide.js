import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MdArrowBackIosNew } from "react-icons/md";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <span
      className={className}
      style={{ display: "block", background: "grey" }}
      onClick={onClick}
    ></span>
  );
}

const SwipeToSlide = (props) => {
  const { rendered_cards, slidesNumber, displayDots } = props;

  var settings = {
    dots: displayDots,
    infinite: false,
    speed: 500,
    slidesToShow: slidesNumber,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container fluid>
      {slidesNumber >= 3 ? (
        <Row>
          <Slider {...settings}>{rendered_cards}</Slider>
        </Row>
      ) : (
        <Row>{rendered_cards}</Row>
      )}
    </Container>
  );
};

export default SwipeToSlide;
