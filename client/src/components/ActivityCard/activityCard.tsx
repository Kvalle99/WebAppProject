import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

interface ActivityProps {
    activityName : string;
    activityDesc : string;
    activityAdder : Function;
    trip : any

}

function ActivityCard(props: ActivityProps) {

    return (
        <Card
          className={"border border-4 " + (getActivityChosen() ? "border-success" : "")}
          style={{ width: "18rem", margin: "5px" }}
        >
          <Card.Img
            className="img-fluid"
            variant="top"
            width="200"
            src={require("./SampleActivity.png")}
          />
          <Card.Body>
            <Card.Title>{props.activityName}</Card.Title>
            <Card.Text>
              {props.activityDesc}
            </Card.Text>
            <Button
              variant="primary"
              role="changeDest"
              onClick={() => addActivity()}
            >
              Add activity
            </Button>
          </Card.Body>
        </Card>
    );

    function addActivity() {
      var acts : string[] = []

      for (let act of props.trip.activities) {
        acts.push(act.name)
      }

      acts.forEach(function (act) {
        console.log(act)
      })

      props.activityAdder(props.activityName);
      
      var acts1 : string[] = []

      for (let act of props.trip.activities) {
        acts1.push(act.name)
      }

      acts1.forEach(function (act) {
        console.log(act)
      })
    }
    
    function getActivityChosen() : boolean {
      var acts : string[] = []
      var actChosen : boolean = false

      for (let act of props.trip.activities) {
        acts.push(act.name)
      }

      acts.forEach(function (act) {
        if (act == props.activityName) {
          actChosen = true;
        }
      })

      return actChosen
    }
}

export default ActivityCard;

