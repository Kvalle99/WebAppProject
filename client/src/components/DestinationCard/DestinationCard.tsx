import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface DestinationCardProps {
  destinationName: string;
  destinationDescription: string;
  destinationPicture: string;
  destinationActivities: string[];
  changeDest: Function;
  currentDestination?: string;
}

function DestinationCard(props: DestinationCardProps) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
    <Card
      className={"border border-4 " + (currentChoice() ? "border-success" : "")}
      style={{ width: "18rem", margin: "5px" }}
    >
      <Card.Img
        className="img-fluid"
        variant="top"
        width="200"
        src={require("./SampleCity.jpg")}
      />
      <Card.Body>
        <Card.Title>{props.destinationName}</Card.Title>
        <Card.Text>
          {props.destinationDescription}
          <ul>
            <li>{props.destinationActivities[0]}</li>
            <li>{props.destinationActivities[1]}</li>
            <li>{props.destinationActivities[2]}</li>
          </ul>
        </Card.Text>
        <Button
          variant="primary"
          role="changeDest"
          onClick={() => newDestination()}
        >
          Go here
        </Button>
        <Button variant="secondary" onClick={handleShow} style={{margin: "10px"}}>
          More info
        </Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.destinationName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.destinationDescription}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
          variant="primary"
          role="changeDest"
          onClick={() => newDestination()}
        >
          Go here
        </Button>
          </Modal.Footer>
        </Modal>
    </>

    
  );


  function newDestination() {
    props.changeDest(props.destinationName);
  }

  function currentChoice(): boolean {
    if (props.destinationName == props.currentDestination) {
      return true;
    }
    return false;
  }
}

export default DestinationCard;

/*
import React from 'react'

export default function DestinationCard() {
  return (
    <div className="card" >
        <img src="../images/landingBg.jpg" className="card-img-top"/>
        <div className="card-body">
            <h1 className="card-title">City Name</h1>
            <p className="card-text">This is a really great city that you should visit</p>
            <a href="#" className="btn btn-primary">Go here</a>
        </div>
    </div>
  )
}
*/
