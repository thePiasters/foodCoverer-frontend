import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const EditButton = (props) => {
  const { product, color } = props;
  return (
    <Link
      to={{
        pathname: `/edit/product/${product.productId}`,
        state: { product: product },
      }}
    >
      <MdModeEditOutline color={color} size={28} />
    </Link>
  );
};
export default EditButton;
