import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { t } from "dictionaries/en";

const AlertInfo = (props) => {
  const [show, setShow] = useState(props.isError);

  function NewlineText(props) {
    const text = props.text;
    const newText = text.split("\n").map((str) => <p>{str}</p>);

    return newText;
  }

  useEffect(() => {
    setShow(props.isError);
  }, [props]);

  if (show) {
    return (
      <Alert
        id="invalid-data-alert"
        variant="danger"
        onClose={() => setShow(false)}
        // dismissible
      >
        <Alert.Heading>{t.Error.general}</Alert.Heading>
        <NewlineText text={props.errorMsg} />
      </Alert>
    );
  }
  return <></>;
};
export default AlertInfo;
