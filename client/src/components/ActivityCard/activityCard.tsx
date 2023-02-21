import React from 'react'
import { Button, Card } from 'react-bootstrap';

interface ActivityProps {
    activityName : string;
    activityDesc : string;
    activityAdder : Function;
}

function activityCard(props: ActivityProps) {
    return (
        <>
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
        </>
    );

    function addActivity() {
      props.activityAdder(props.activityName);
    }
    
    function getActivityChosen() : boolean {
      var tripChosen : boolean = false;

      if (props.chosenActivities == null) {
        return false;
      }

      props.chosenActivities.forEach(function(chosenName) {
        console.log(chosenName + " and " + props.activityName)
        if (chosenName == props.activityName) {
          tripChosen = true;
        }
      })
    
      return tripChosen;
    }
}

export default activityCard;

