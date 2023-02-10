import React from "react";
import ReactDOM from "react-dom";
import PlanSidenav from "./plan-sidenav";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PlanSidenav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
