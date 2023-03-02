import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Modal,
  Nav,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import CreateNewTripBtn from "../CreateNewTripBtn/CreateNewTripBtn";
import axios from "axios";

interface NavbarProps {
  chooseTrip: Function;
  trips: string[];
  createNewTrip: Function;
  chosenTrip: string;
}

function NavbarComponent(props: NavbarProps) {
  const [login, setlogin] = useState<boolean>(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={require("../../images/logo.png")}
          className="rounded-circle ml-0"
          alt="LogoMissing"
          height="65px"
        />
      </Navbar.Brand>

      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Your trips
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <ul>
            {props.trips.map((trip) => (
              <Dropdown.Item
                key={trip}
                onClick={() => chooseTrip(trip)}
                active={checkActive(trip)}
              >
                {trip}
              </Dropdown.Item>
            ))}
          </ul>
        </Dropdown.Menu>
      </Dropdown>

      <CreateNewTripBtn createTrip={createTrip}></CreateNewTripBtn>

      <Nav className="ms-auto">
        <div>
          <a href="#" onClick={showLogIn}>
            <img
              src={require("../../images/accountIcon.png")}
              alt="Account"
              id="acc"
              height="65px"
              className="justify-content-md-right"
            />
          </a>
          <Modal
            className="border border-3 border-dark p-2 rounded"
            show={login}
            onHide={hideLogIn}
          >
            <Modal.Header closeButton>
              <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter username"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hideLogIn}>
                Close
              </Button>
              <Button variant="success" onClick={handleSubmit}>
                Log In
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Nav>
    </Navbar>
  );

  function showLogIn() {
    setlogin(true);
  }

  function hideLogIn() {
    setlogin(false);
  }

  function handleSubmit() {
    //here you should hash teh password before sending to backend but we wont do that in this project
    const res = axios
      .post("http://localhost:8080/user/login", {
        userName: userName,
        password: password,
      })
      .then((res) => {
        //console.log("res" + res.data);
        console.log(res.data[0]); //set as token and send with backend request
        console.log(res.data[1]); //set as userId
      });
  }

  function chooseTrip(trip: string) {
    props.chooseTrip(trip);
  }

  function checkActive(trip: string): boolean {
    /*     console.log("trip: ", trip, ", chosenTrip: ", props.chosenTrip, ", t/f: ", trip === props.chosenTrip)
     */ return trip === props.chosenTrip;
  }

  function createTrip(tripName: string) {
    props.createNewTrip(tripName);
  }
}

export default NavbarComponent;
