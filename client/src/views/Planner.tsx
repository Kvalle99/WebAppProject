import axios from "axios";
import { useEffect, useState } from "react";
import CalendarComponent from "../components/Calendar/Calendar";
import AccomodationView from "./plan-view/AccomodationView";
import Destinations from "./plan-view/DestinationsView/destinations";

interface PlanneProps {
  // set to optional so the component doesn´t break if  no trip has been created
  viewToShow: string;
}

//my current trip, for now atleast
const TripId = "6845191";
//var myTrip: any;
//getTrip(TripId);

//var myTrip: any;

function Planner(props: PlanneProps) {
  const [myTrip, setTrip] = useState<any | null>(null);

  useEffect(() => {
    getTrip(TripId);
  }, []);

  if (props.viewToShow === "Destination") {
    return <Destinations tripId={TripId} update={updateTrip} />;
  }

  if (props.viewToShow === "Duration") {
    return (
      <CalendarComponent
        tripId={myTrip.id}
        startDate={myTrip.startDate}
        endDate={myTrip.endDate}
        update={updateTrip}
      />
    );
  }

  if (props.viewToShow === "Accomodation") {
    return (
      <AccomodationView
        tripId={TripId}
        //update={updateTrip}
      />
    );
  }
  return <></>;

  function getTrip(myId: string) {
    const res = axios
      .post("http://localhost:8080/trip/getTrip", { id: myId })
      .then((res) => {
        setTrip(res.data);
      });
  }
  function saveDates(newStartDate: Date, newEndDate: Date) {
    //"hack to fix the changing of time zones between server and client", Common problem  with date-class and this was the first solution we found
    newStartDate.setHours(1);
    newEndDate.setHours(1);
    const res = axios
      .post("http://localhost:8080/trip/saveDates", {
        id: myTrip.id,
        startDate: parseInt((newStartDate.getTime() / 1000).toFixed(0)),
        endDate: parseInt((newEndDate.getTime() / 1000).toFixed(0)),
      })
      .then((res) => {});
  }

  function updateTrip() {
    getTrip(myTrip.id);
  }
}

export default Planner;
