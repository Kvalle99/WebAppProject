import React from "react";
import DestinationCard from "../../../components/DestinationCard/DestinationCard";
import Navbar from "../../../components/Navbar/Navbar";
import PlanSidenav from "../../../components/plan-sidenav/plan-sidenav";

export default function Destinations() {
  return (
    <>
      <div>
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
          <div className="mt-2"></div> 
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
          <div className="mt-2"></div>
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
        </div>
    </>
  );
}
