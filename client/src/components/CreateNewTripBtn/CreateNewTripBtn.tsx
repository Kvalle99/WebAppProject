import React, { FC, useState } from "react";
import styles from "./CreateNewTripBtn.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface CreateNewTripBtnProps {
  createTrip: Function;
  loggedIn: boolean;
}

function CreateNewTripBtn(props: CreateNewTripBtnProps) {
  const [name, setName] = useState("");
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <>
      {props.loggedIn ? (
        <Button variant="light" onClick={handleShow}>
          Start new trip
        </Button>
      ) : (
        <Button variant="light disabled">Start new trip</Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => createTrip(e)}>
            <Form.Group className="mb-3">
              <Form.Label label="Trip Name" className="mb-3">
                <Form.Control
                  placeholder="TripName"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            role="createTrip"
            onClick={(e) => createTrip(e)}
          >
            Create Trip
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }
  function createTrip(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    props.createTrip(name);
    setName("");
    handleClose();
  }
}
export default CreateNewTripBtn;
