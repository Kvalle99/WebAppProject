import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DestinationCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className="img-fluid" variant="top" width="200" src={require("./SampleCity.jpg")} />
      <Card.Body>
        <Card.Title>City Name</Card.Title>
        <Card.Text>
          Great city you should go here.
        </Card.Text>
        <Button variant="primary">Go here</Button>
      </Card.Body>
    </Card>
  );
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
