import { RiDeleteBin2Fill } from "react-icons/ri";

const DeleteButton = (props) => {
  const { color, elem } = props;
  const style = {
    border: "none",
    backgroundColor: "inherit",
  };
  return (
    <button style={style} id="delete-button">
      <RiDeleteBin2Fill
        onClick={() => props.deleteMethod(elem)}
        color={color}
        size={26}
      />
    </button>
  );
};
export default DeleteButton;
