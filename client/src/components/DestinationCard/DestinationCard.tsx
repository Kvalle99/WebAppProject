import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./destinationCard.module.css";

interface DestinationCardProps {
  destinationName: string;
  destinationDescription: string;
  destinationCountry: string;
  destinationPicture: string;
  changeDest: Function;
  currentDestination?: string;
  disabled: boolean;
}

function DestinationCard(props: DestinationCardProps) {
  const [show, setShow] = useState(false);
  const [activites, setActivities] = useState<string[]>([]);

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
          variant="top"
          src={props.destinationPicture}
          className={styles.cardImg}
        />
        <Card.Body>
          <Card.Title>
            {props.destinationName}, {props.destinationCountry}
          </Card.Title>
          <Card.Text>
            {props.destinationDescription}
            <br />
            Sample activities:
            <ul>
              <li>{activites[0]}</li>
              <li>{activites[1]}</li>
            </ul>
          </Card.Text>
          <Button
            variant={props.disabled ? "primary disabled" : "primary"}
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
          <Modal.Title>
            {props.destinationName}, {props.destinationCountry}
          </Modal.Title>
        </Modal.Header>
        <img src={props.destinationPicture} className="img-fluid" />
        <Modal.Body>
          {props.destinationDescription}
          <br />
          Available activities:
          <ul>
            {activites?.map((act) => (
              <li>{act}</li>
            ))}
          </ul>
        </Modal.Body>
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
        var acts: string[] = [];

        for (let act of res.data) {
          acts.push(act.name);
        }

        setActivities(acts);
      });
    return;
  }
}

export default DestinationCard;