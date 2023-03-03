import React, { FC, useState } from "react";
import styles from "./CreateNewTripBtn.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

interface CreateNewTripBtnProps {
  createTrip: Function;
}

function CreateNewTripBtn(props: CreateNewTripBtnProps) {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      createTrip();
    }
  };
  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Start new trip
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={createTrip}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FloatingLabel
                controlId="floatingInput"
                label="Trip Name"
                className="mb-3"
              >
                <Form.Control
                  type="input"
                  placeholder="TripName"
                  name="tripName"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" role="createTrip" onClick={createTrip}>
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
  function createTrip() {
    props.createTrip(name);
    handleClose();
  }
}
export default CreateNewTripBtn;
