import axios from "axios";
import { useEffect, useState } from "react";
import { reduceEachTrailingCommentRange } from "typescript";
import CalendarComponent from "../components/Calendar/Calendar";
import { Page } from "../components/plan-sidenav/plan-sidenav";
import SearchBar from "../components/SearchFunction/SearchBar";
import AccomodationView from "./plan-view/AccomodationView/AccomodationView";
import ActivityView from "./plan-view/ActivityView/activityView";
import Destinations from "./plan-view/DestinationsView/destinations";

interface PlannerProps {
  // set to optional so the component doesn´t break if  no trip has been created
  myId: number | undefined;
  currentTrip: any;
  updateTrip: Function;
  currentPage: Page;
}

function Planner(props: PlannerProps) {
  const [searchText, setSearchText] = useState<string>("");

  switch (props.currentPage) {
    case Page.DESTINATION:
      return (
        <>
          <SearchBar searchUpdate={setSearchText} />
          <Destinations
            changeDest={updateDest}
            currentDest={
              props.currentTrip?.destination
                ? props.currentTrip.destination
                : ""
            }
            searchText={searchText}
          />
        </>
      );
    case Page.CALENDAR:
      return (
        <>
          <CalendarComponent
            startDate={props.currentTrip.startDate}
            endDate={props.currentTrip.endDate}
            saveDates={saveDates}
          />
        </>
      );
    case Page.ACTIVITY:
      return (
        <>
          <SearchBar searchUpdate={setSearchText} />
          <ActivityView
            actAdder={addActivity}
            trip={props.currentTrip}
            searchText={searchText}
          />
        </>
      );
    case Page.ACCOMODATION:
      return (
        <>
          <SearchBar searchUpdate={setSearchText} />
          <AccomodationView
            changeAccomodation={updateAcc}
            currentAcc={props.currentTrip?.hotel ? props.currentTrip.hotel : ""}
            currentDest={
              props.currentTrip?.destination
                ? props.currentTrip.destination
                : ""
            }
            searchText={searchText}
          />
        </>
      );
    case Page.SUMMARY:
      return <></>;
  }

  function updateTrip() {
    props.updateTrip();
  }

  function updateDest(name: string) {
    changeDestination(name);
    updateTrip();
  }

  function addActivity(act: string) {
    const res = axios
      .post("http://localhost:8080/trip/handleActivity", {
        activity: act,
        dest: props.currentTrip.destination,
        id: props.currentTrip.id,
      })
      .then((res) => {
        updateTrip();
      });
  }

  function saveDates(newStartDate: Date, newEndDate: Date) {
    //"hack to fix the changing of time zones between server and client", Common problem  with date-class and this was the first solution we found
    newStartDate.setHours(1);
    newEndDate.setHours(1);
    const res = axios
      .post("http://localhost:8080/trip/saveDates", {
        userId: props.myId,
        tripId: props.currentTrip.id,
        startDate: parseInt((newStartDate.getTime() / 1000).toFixed(0)),
        endDate: parseInt((newEndDate.getTime() / 1000).toFixed(0)),
      })
      .then((res) => {
        updateTrip();
      });
  }

  function changeDestination(name: string) {
    const res = axios
      .post("http://localhost:8080/trip/changeDestination", {
        userId: props.myId,
        tripId: props.currentTrip.id,
        destinationName: name,
      })
      .then(() => props.updateTrip());
  }

  function updateAcc(name: string, city: string) {
    changeAccomodation(name, city);
  }

  function changeAccomodation(name: string, city: string) {
    const res = axios
      .post("http://localhost:8080/trip/changeAccomodations", {
        userId: props.myId,
        tripId: props.currentTrip.id,
        accomodationName: name,
        accomodationCity: city,
      })
      .then((res) => {
        props.updateTrip();
      });
  }
}

export default Planner;
