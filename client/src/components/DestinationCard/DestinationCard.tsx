import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface DestinationCardProps {
  destinationName: string;
  destinationDescription: string;
  destinationPicture: string;
  changeDest: Function;
  currentDestination?: string;
}

function DestinationCard(props: DestinationCardProps) {
  const [show, setShow] = useState(false);
  const [activites, setActivities] = useState<string[]>([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <>
      <Card
        className={
          "border border-4 " + (currentChoice() ? "border-success" : "")
        }
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
              {activites?.map((act) => (
              <li>
                {act}
              </li>
              ))}
            </ul>
          </Card.Text>
          <Button
            variant="primary"
            role="changeDest"
            onClick={() => newDestination()}
          >
            Go here
          </Button>
          <Button
            variant="secondary"
            onClick={handleShow}
            style={{ margin: "10px" }}
          >
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

  function getActivities() {
    const res = axios
      .get("http://localhost:8080/activity/getAllActivites", {
        params: { dest: props.destinationName, searchText: "" },
      })
      .then((res) => {
        var acts : string[] = []

        for (let act of res.data) {
          acts.push(act.name)
        }

        if (acts.length > 3) {
          acts.splice(2, acts.length - 3)
        }

        setActivities(acts)
      });
    return;
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
