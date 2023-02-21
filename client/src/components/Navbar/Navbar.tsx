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
  Nav,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import CreateNewTripBtn from "../CreateNewTripBtn/CreateNewTripBtn";

interface NavbarProps {
  chooseTrip: Function;
  trips: string[];
  createNewTrip: Function;
  chosenTrip: string;
}

function NavbarComponent(props: NavbarProps) {
  var searchValue: string = "";

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
          <a href="#">
            <img
              src={require("../../images/accountIcon.png")}
              alt="Account"
              id="acc"
              height="65px"
              className="justify-content-md-right"
            />
          </a>
        </div>
      </Nav>
    </Navbar>
  );

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
