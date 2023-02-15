import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar/Navbar";
import PlanSidenav from "./components/plan-sidenav/plan-sidenav";
import axios from "axios";
import Planner from "./views/Planner";

function App() {
  //var myTrip: any;
  //const [testHook, changeHook] = useState(0);
  const [currentView, setView] = useState("Destination");
  const [myTrips, setTrips] = useState<string[]>([]);

  const userId = 11; //to be set at log-in wit token later on

  useEffect(() => {
    getMyTrips(userId);
  }, []);

  return (
    <div className="App">
      <NavbarComponent trips={myTrips} />
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
            <Planner viewToShow={currentView} />
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

  function addTrips(trips: string[]) {
    setTrips(trips);
  }

  function getMyTrips(myId: number) {
    const res = axios
      .post("http://localhost:8080/trip/getMyTrips", { id: myId })
      .then((res) => {
        console.log("got Trips: ", res.data);
        setTrips(res.data);
      });
  }
}

export default App;
