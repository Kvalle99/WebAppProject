import React from "react";
import ReactDOM from "react-dom";
import SidenavListitem from "./sidenav-listitem";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SidenavListitem listText={""} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
