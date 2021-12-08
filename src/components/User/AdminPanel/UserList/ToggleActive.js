import * as Constants from "components/Constatns.js";
import { Button } from "react-bootstrap";
import { t } from "dictionaries/en";

const ToggleActive = (props) => {
  const { user, enableUser, disableUser } = props;
  if (user.role !== Constants.USER_ROLE_INACTIVE) {
    return (
      <Button variant="outline-secondary" onClick={() => disableUser(user)}>
        <span>{t.Panel.disable}</span>
      </Button>
    );
  } else {
    return (
      <Button variant="outline-success" onClick={() => enableUser(user)}>
        <span>{t.Panel.enable}</span>
      </Button>
    );
  }
};
export default ToggleActive;
