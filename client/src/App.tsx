import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import PlanSidenav from "./components/plan-sidenav/plan-sidenav";
import axios from "axios";
import Planner from "./views/Planner";

function App() {
  const [testHook, changeHook] = useState(0);

  const [currentView, setView] = useState("Destination");
  //my current trip, for now atleast
  const id = "6845191";
  getTrip(id);

  return (
    <div className="App">
      <Navbar />
      <PlanSidenav changeView={changeView} />
      <Planner viewToCShow={currentView} />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      ></script>
    </div>
  );

  function changeView(view: string) {
    console.log("new view: ", view);
    setView(view);
  }

  function getTrip(myId: string) {
    const res = axios
      .post("http://localhost:8080/trip/getTrip", { id: myId })
      .then((res) => console.log(res));
  }
}

export default App;
