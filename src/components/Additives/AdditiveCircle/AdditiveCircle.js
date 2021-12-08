import * as Constants from "components/Constatns.js";
import "./AdditiveCircle.scss";
const AdditivesCircle = (props) => {
  const { safetyLevel, size, symbol } = props;

  const backgroundColor =
    safetyLevel === Constants.ADDITIVE_SAFETY_LEVEL_HIGH
      ? "#88d654"
      : safetyLevel === Constants.ADDITIVE_SAFETY_LEVEL_MODERATE
      ? "#ffc34d"
      : safetyLevel === Constants.ADDITIVE_SAFETY_LEVEL_LOW
      ? "#ff4d4d"
      : "#c4c4c4";
  const sizeValue = size + "px";

  var style = {
    backgroundColor: backgroundColor,
    width: sizeValue,
    height: sizeValue,
  };

  return (
    <div className="circle" style={style}>
      <span>{symbol}</span>
    </div>
  );
};
export default AdditivesCircle;
