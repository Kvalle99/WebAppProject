import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Destinations from "./Destinations/destinations";

import CalendarComponent from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Navbar";
import PlanSidenav from "./components/plan-sidenav/plan-sidenav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PlanSidenav />
      <CalendarComponent />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      ></script>
    </div>
  );
}

export default App;
