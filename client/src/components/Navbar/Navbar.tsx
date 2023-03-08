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
  trips: simpleTripObject[];
  createNewTrip: Function;
  chosenTrip: number;
  setUser: Function;
  loggedIn: boolean;
}

export interface simpleTripObject {
  id: number;
  name: string;
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
          style={{ marginLeft: "10px" }}
        />
      </Navbar.Brand>

      <Dropdown>
        <Dropdown.Toggle
          variant={props.loggedIn ? "light" : "light disabled"}
          id="dropdown-basic"
        >
          Your trips
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div style={{ width: "350px" }}>
            <div>
              {props.trips.length === 0 ? (
                <div>
                  <Dropdown.Header className="text-decoration-underline" style={{fontSize: "1.2rem", color: "black"}}>
                    You have no trips
                  </Dropdown.Header>
                  <h5>Start by creating a new trip!</h5>
                </div>
              ) : (
                <div>
                  <Dropdown.Header className="text-decoration-underline" style={{fontSize: "1.2rem", color: "black"}}>
                    Your started trips:
                  </Dropdown.Header>
                  <ul style={{ padding: "0" }}>
                    {props.trips.map((trip) => (
                      <Dropdown.Item
                        key={trip.id}
                        onClick={() => chooseTrip(trip.id)}
                        active={checkActive(trip)}
                      >
                        {trip.name}
                      </Dropdown.Item>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
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
                {props.loggedIn ? "Log Out" : "Log In"}
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
    //here you should hash the password before sending to backend but we wont do that in this project

    if (props.loggedIn) {
      props.setUser("");
    } else {
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
  }

  function showErrorMessage() {
    setFail(true);
  }
  function hideErrorMessage() {
    setFail(false);
  }

  function chooseTrip(trip: number) {
    props.chooseTrip(trip);
  }

  function checkActive(trip: simpleTripObject): boolean {
    return trip.id === props.chosenTrip;
  }

  function createTrip(tripName: string) {
    props.createNewTrip(tripName);
  }
}

export default NavbarComponent;
