import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import CalendarComponent from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Navbar";
import Destinations from "./views/plan-view/DestinationsView/destinations";
import AccomodationView from "./views/plan-view/AccomodationView";
import PlanSidenav from "./components/plan-sidenav/plan-sidenav";
import axios from "axios";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
