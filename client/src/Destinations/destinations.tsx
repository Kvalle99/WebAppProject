import React from "react";
import DestinationCard from "../components/DestinationCard/DestinationCard";
import Navbar from "../components/Navbar/Navbar";

export default function Destinations() {
  return (
    <>
      <div className="row">
        <div className="col">
          <DestinationCard />
        </div>
        <div className="col">
          <DestinationCard />
        </div>
        <div className="col">
          <DestinationCard />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DestinationCard />
        </div>
        <div className="col">
          <DestinationCard />
        </div>
        <div className="col">
          <DestinationCard />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DestinationCard />
        </div>
        <div className="col">
          <DestinationCard />
        </div>
        <div className="col">
          <DestinationCard />
        </div>
      </div>
    </>
  );
}
