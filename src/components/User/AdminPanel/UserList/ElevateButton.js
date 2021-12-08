import { isAdamin } from "utils/login";
import { Button } from "react-bootstrap";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import { t } from "dictionaries/en";

const ElevateButton = (props) => {
  const { user, elevate } = props;
  if (isAdamin(user.role)) {
    return <MdAdminPanelSettings size={80} color="#5c97f7" />;
  } else {
    return (
      <Button variant="outline-secondary" onClick={() => elevate(user)}>
        <span>
          <FaLevelUpAlt size={20} />
          {t.Panel.elevate}
        </span>
      </Button>
    );
  }
};
export default ElevateButton;
