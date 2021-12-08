import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import * as Constants from "../../Constatns";
const PictureForm = (props) => {
  const { setSelectedFile, setImageSource, setLink, imageSource } = props;
  const [provideLink, setProvideLink] = useState(false);

  useEffect(() => {
    if (provideLink) {
      setImageSource(Constants.IMAGE_SOURCE_LINK);
    }
    if (!provideLink) {
      setImageSource(Constants.IMAGE_SOURCE_SERVER);
    }
  }, [provideLink]);

  return (
    <>
      <Row className="pd-3p">
        {!provideLink ? (
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload picture file: </Form.Label>

            <Form.Control
              type="file"
              accept=".png,.jpg,.svg,.jpeg"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              custom
            />
          </Form.Group>
        ) : (
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Provide picture link: </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setLink(e.target.value)}
            />
          </Form.Group>
        )}
      </Row>
      <Row className="pd-3p">
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Provide link"
            onClick={(e) => setProvideLink(!provideLink)}
          />
        </Form.Group>
      </Row>
    </>
  );
};
export default PictureForm;
