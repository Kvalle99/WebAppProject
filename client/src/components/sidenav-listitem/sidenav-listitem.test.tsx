import React from "react";
import ReactDOM from "react-dom";
import { Page } from "../plan-sidenav/plan-sidenav";
import SidenavListitem from "./sidenav-listitem";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <SidenavListitem
      thisPage={Page.DESTINATION}
      listText={""}
      changeView={changeView}
      active={false}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

  function changeView() {}
});
