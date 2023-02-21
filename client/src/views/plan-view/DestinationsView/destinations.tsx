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
  currentDest: string;
  changeDest: Function;
}

function Destinations(props: destProps) {
  const [dest, setDest] = useState<Destination[] | null>(null);

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <Container>
      <Row xs={1} md={3}>
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
              currentDestination={props.currentDest}
              changeDest={props.changeDest}
            />
          </div>
        ))}
      </Row>
    </Container>
  );

  function getDestinations() {
    const dest = axios
      .get("http://localhost:8080/destination/getDestinations")
      .then((res) => {
        setDest(res.data);
      });
    return;
  }
}

export default Destinations;
