import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { t } from "dictionaries/en";

const DisplayUserProducts = (props) => {
  const { user, index, collapseIndex } = props;
  const { setCollapseIndex, showCreatedProducts } = props;

  if (index === collapseIndex) {
    return (
      <p onClick={() => setCollapseIndex()}>
        <IoMdArrowDropdown />
        <em>{t.Panel.showCreated}</em>
      </p>
    );
  } else {
    return (
      <p onClick={() => showCreatedProducts(index, user)}>
        <IoMdArrowDropright />
        <em>{t.Panel.showCreated}</em>
      </p>
    );
  }
};
export default DisplayUserProducts;
