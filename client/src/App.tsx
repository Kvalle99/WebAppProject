import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CalendarComponent from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CalendarComponent />
    </>
  );
}

export default App;
