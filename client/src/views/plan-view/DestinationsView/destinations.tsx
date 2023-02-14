import axios from "axios";
import React, { useEffect, useState } from "react";
import DestinationCard from "../../../components/DestinationCard/DestinationCard";

interface Destination {
  city: string;
  country: string;
}

interface destProps {
  tripId?: string;
  update: Function;
}

function Destinations(props: destProps) {
  const [dest, setDest] = useState<Destination[] | null>(null);
  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <div className="col-lg-4">
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
            changeDest={changeDestination}
          />
        </div>
      ))}
    </div>
  );

  function getDestinations() {
    const dest = axios
      .get("http://localhost:8080/destination/getDestinations", {})
      .then((res) => {
        setDest(res.data);
      });
    return;
  }

  function changeDestination(name: string) {
    const res = axios
      .post("http://localhost:8080/trip/changeDestination", {
        id: props.tripId,
        destinationName: name,
      })
      .then(() => props.update());
  }
}

export default Destinations;
