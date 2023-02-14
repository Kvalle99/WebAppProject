import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Destinations from "./views/plan-view/DestinationsView/destinations";
import CalendarComponent from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Navbar";
import PlanSidenav from "./components/plan-sidenav/plan-sidenav";
import axios from "axios";
import Planner from "./views/Planner";

//my current trip, for now atleast
const id = "6845191";
var myTrip: any;
getTrip(id);

function App() {
  //var myTrip: any;
  const id = "6845191";
  //const [testHook, changeHook] = useState(0);
  const [currentView, setView] = useState("Destination");
  return (
    <div className="App">
      <Navbar />
      <div
        className="container-fluid"
        style={{ maxWidth: "1080 ", margin: "0 auto" }}
      >
        <div className="row">
          <div className="col-3">
            <PlanSidenav changeView={changeView} />
          </div>
          <div className="col-9">
            <div className="mt-2"></div>
            <Planner tripId={id} viewToShow={currentView} />
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      ></script>
    </div>
  );

  function changeView(view: string) {
    //console.log("new view: ", view);
    setView(view);
  }
}

function getTrip(myId: string) {
  const res = axios
    .post("http://localhost:8080/trip/getTrip", { id: myId })
    .then((res) => {
      myTrip = res.data;
    });
}

export default App;
