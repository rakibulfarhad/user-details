import React, { useState } from "react";
import { ButtonGroup, Button, Modal } from "react-bootstrap";
import "./ReactModal.css";

const ReactModal = ({ userDetails }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title text-center">
              {" "}
              {userDetails.name.title} {userDetails.name.first}{" "}
              {userDetails.name.last}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-container text-center"></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ReactModal;