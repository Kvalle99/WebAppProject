import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar/Navbar";
import PlanSidenav, { Page } from "./components/plan-sidenav/plan-sidenav";
import axios from "axios";
import Planner from "./views/Planner";

function App() {
  //var myTrip: any;
  //const [testHook, changeHook] = useState(0);
  const [currentView, setView] = useState("Destination");
  const [myTrips, setTrips] = useState<string[]>([]);
  const [myTrip, setTrip] = useState<any | null>(null);
  const [chosenTripId, setTripId] = useState<string>("");
  const [page, setPage] = useState<Page>(Page.DESTINATION);
  // should be able to remove chosenTripId if we set a model-class/interface
  // for the Trip in the frontend or smth

  const userId = 11; //to be set at log-in wit token later on

  useEffect(() => {
    getMyTrips(userId);
  }, []);

  return (
    <div className="App">
      <NavbarComponent
        chooseTrip={changeTrip}
        trips={myTrips}
        createNewTrip={createNewTrip}
        chosenTrip={chosenTripId}
      />
      <div
        className="container-fluid"
        style={{ maxWidth: "1080 ", margin: "0 auto" }}
      >
        <div className="row">
          <div className="col-2">
            <PlanSidenav currentPage={page} changeView={changeView} trip={myTrip}/>
          </div>
          <div className="col-10">
            <div className="mt-2"></div>
            <Planner
              myId={userId}
              currentTrip={myTrip}
              updateTrip={updateTrip}
              currentPage={page}
            />
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      ></script>
    </div>
  );

  function changeView(newPage: Page) {
    //console.log("new view: ", view);
    setPage(newPage);
  }

  function changeTrip(trip: string) {
    //setChoosenTrip(trip);
    getTrip(userId, trip);
    setTripId(trip);
  }

  function createNewTrip(tripName: string) {
    const res = axios
      .post("http://localhost:8080/trip/createTrip", {
        userId,
        tripName,
      })
      .then((res) => {
        setTrip(res.data);
        setTripId(res.data.id);
      })
      .then(() => {
        getMyTrips(userId);
      });
  }

  function getTrip(myId: number, tripId: string) {
    const res = axios
      .post("http://localhost:8080/trip/getTrip", {
        myId: myId,
        tripId: tripId,
      })
      .then((res) => {
        setTrip(res.data);
        console.log("current: " + res.data.destination);
        console.log(res.data);
        setTripId(res.data.id);
      });
  }

  function getMyTrips(myId: number) {
    const res = axios
      .post("http://localhost:8080/trip/getMyTrips", { id: myId })
      .then((res) => {
        setTrips(res.data);
        getTrip(userId, res.data[0]);
      });
  }
  function updateTrip() {
    getTrip(userId, myTrip.id);
  }
}

export default App;
