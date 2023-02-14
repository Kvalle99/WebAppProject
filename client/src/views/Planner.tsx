import axios from "axios";
import { useState } from "react";
import CalendarComponent from "../components/Calendar/Calendar";
import AccomodationView from "./plan-view/AccomodationView";
import Destinations from "./plan-view/DestinationsView/destinations";

interface PlanneProps {
  // set to optional so the component doesn´t break if  no trip has been created
  tripId: string;
  viewToCShow: string;
}

var myTrip: any;

function Planner(props: PlanneProps) {
  //console.log("planner:");
  //console.log(props.tripId);
  //const [currentTrip, setTrip] = useState<any>(null);

  if (props.tripId) getTrip(props.tripId);

  if (props.viewToCShow === "Destination") {
    return <Destinations />;
  }

  if (props.viewToCShow === "Duration") {
    return (
      <CalendarComponent
        startDate={myTrip.startDate}
        endDate={myTrip.endDate}
        saveDates={saveDates}
      />
    );
  }

  if (props.viewToCShow === "Accomodation") {
    return <AccomodationView tripId={myTrip.id} />;
  }
  return <></>;
}

function getTrip(myId: string) {
  //console.log("Call planner backend");
  const res = axios
    .post("http://localhost:8080/trip/getTrip", { id: myId })
    .then((res) => {
      myTrip = res.data;
      //setTrip(res.data);
      //console.log("myTrip: ");
      //console.log(myTrip);
      //console.log(res.data);
    });
}

function saveDates(newStartDate: Date, newEndDate: Date) {
  //"hack to fix the changing of time zones between server and client"
  newStartDate.setHours(1);
  newEndDate.setHours(1);
  const res = axios
    .post("http://localhost:8080/trip/saveDates", {
      id: myTrip.id,
      startDate: parseInt((newStartDate.getTime() / 1000).toFixed(0)),
      endDate: parseInt((newEndDate.getTime() / 1000).toFixed(0)),
    })
    .then((res) => {
      //console.log(res.status);
    });
}

export default Planner;
