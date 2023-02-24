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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event: any) => {
    setName(event.target.value);
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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FloatingLabel
                controlId="floatingInput"
                label="Trip Name"
                className="mb-3"
                onChange={handleChange}
              >
                <Form.Control
                  type="input"
                  placeholder="TripName"
                  name="tripName"
                />
              </FloatingLabel>
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
            onClick={() => {
              createTrip();
              handleClose();
            }}
          >
            Create Trip
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  function createTrip() {
    console.log(name);
    props.createTrip(name);
  }
}
export default CreateNewTripBtn;
