import { Image } from "react-bootstrap";

import grade_a from "./images/nutriscore_a.png";
import grade_b from "./images/nutriscore_b.png";
import grade_c from "./images/nutriscore_c.png";
import grade_d from "./images/nutriscore_d.png";
import grade_e from "./images/nutriscore_e.png";

import "./NutriScoreImage.scss";

const NutriScoreImage = (props) => {
  const { grade } = props;
  if (grade === "a") return <Image id="nutri-score-image" src={grade_a} />;
  if (grade === "b") return <Image id="nutri-score-image" src={grade_b} />;
  if (grade === "c") return <Image id="nutri-score-image" src={grade_c} />;
  if (grade === "d") return <Image id="nutri-score-image" src={grade_d} />;
  if (grade === "e") return <Image id="nutri-score-image" src={grade_e} />;
  return <></>;
};
export default NutriScoreImage;
