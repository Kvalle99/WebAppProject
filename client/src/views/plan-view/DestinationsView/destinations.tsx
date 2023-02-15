import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import DestinationCard from "../../../components/DestinationCard/DestinationCard";

interface Destination {
  city: string;
  country: string;
}

interface destProps {
  //tripId?: string;
  changeDest: Function;
}

function Destinations(props: destProps) {
  const [dest, setDest] = useState<Destination[] | null>(null);

  useEffect(() => {
    getDestinations();
  }, []);

  const card = (
    destinationName: string
    //destinationDescription:string,
    //destinationPicture:string,
    //destinationActivities:string[], changeDest:Function
  ) => {
    return (
      <DestinationCard
        destinationName={destinationName}
        destinationDescription={"You should go here"}
        destinationPicture={"./SampleCity.jpg"}
        destinationActivities={[
          "One activity",
          "Another activity",
          "Boring activity",
        ]}
        changeDest={props.changeDest}
        key={destinationName}
      />
    );
  };
  console.log(dest);
  return (
    <Container>
      <Row xs={1} md={4}>
        {dest?.map((destination) => (
          <div>
            <DestinationCard
              destinationName={destination.city}
              destinationDescription={"You should go here"}
              destinationPicture={"./SampleCity.jpg"}
              destinationActivities={[
                "One activity",
                "Another activity",
                "Boring activity",
              ]}
              changeDest={props.changeDest}
            />
          </div>
        ))}
      </Row>
    </Container>
  );

  function getDestinations() {
    console.log("getting dests");
    const dest = axios
      .get("http://localhost:8080/destination/getDestinations")
      .then((res) => {
        setDest(res.data);
      });
    return;
  }
}

export default Destinations;
