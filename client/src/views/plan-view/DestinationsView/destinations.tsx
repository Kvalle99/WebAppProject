import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import DestinationCard from "../../../components/DestinationCard/DestinationCard";

interface Destination {
  city: string;
  country: string;
  description : string
  image : string
}

interface destProps {
  currentDest: string;
  changeDest: Function;
  searchText: string;
}

function Destinations(props: destProps) {
  const [dest, setDest] = useState<Destination[] | null>(null);

  useEffect(() => {
    getDestinations();
  }, [props.searchText]);

  return (
    <Container>
      <Row xs={1} md={3}>
        {dest?.map((destination) => (
          <div>
            <DestinationCard
              destinationName={destination.city}
              destinationDescription={destination.description}
              destinationCountry={destination.country}
              destinationPicture={destination.image}
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
      .get("http://localhost:8080/destination/getDestinations", {
        params: { searchText: props.searchText },
      })
      .then((res) => {
        let destinationsArr: Array<Destination> = res.data;
        setDest(destinationsArr);
      });
    return;
  }
}

export default Destinations;
