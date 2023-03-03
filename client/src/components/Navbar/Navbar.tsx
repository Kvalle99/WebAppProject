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
import axios, { AxiosError } from "axios";

interface NavbarProps {
  chooseTrip: Function;
  trips: string[];
  createNewTrip: Function;
  chosenTrip: string;
  setUser: Function;
  loggedIn: boolean;
}

function NavbarComponent(props: NavbarProps) {
  const [login, setlogin] = useState<boolean>(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogIn, setFail] = useState<boolean>(false);

  useEffect(() => {
    setlogin(props.loggedIn);
    if (!props.loggedIn) {
      showLogIn();
    } else {
      hideLogIn();
    }
  }, [props.loggedIn]);

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

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
          {props.loggedIn ? (
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
          ) : (
            <h3>Log in to start planning!</h3>
          )}
        </Dropdown.Menu>
      </Dropdown>

      <div className="mx-2">
        <CreateNewTripBtn
          loggedIn={props.loggedIn}
          createTrip={createTrip}
        ></CreateNewTripBtn>
      </div>

      <Nav className="ms-auto">
        <div className="mx-2">
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
              <Modal.Title>Log In to start planning your trip!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                className=""
                onSubmit={handleSubmit}
                onKeyPress={handleKeyPress}
              >
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
              <p style={{ color: "red" }}>
                {failedLogIn ? "Wrong Credentials!" : ""}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hideLogIn}>
                Keep Browsing
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
        try {
          props.setUser(res.data[0], res.data[1]);
          hideLogIn();
          hideErrorMessage();
        } catch {
          showErrorMessage();
        }
      })
      .catch((reason: AxiosError) => {
        showErrorMessage();
      });
  }

  function showErrorMessage() {
    setFail(true);
  }
  function hideErrorMessage() {
    setFail(false);
  }

  function chooseTrip(trip: string) {
    props.chooseTrip(trip);
  }

  function checkActive(trip: string): boolean {
     return trip === props.chosenTrip;
  }

  function createTrip(tripName: string) {
    props.createNewTrip(tripName);
  }
}

export default NavbarComponent;
