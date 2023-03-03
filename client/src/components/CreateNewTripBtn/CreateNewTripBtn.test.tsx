import React from "react";
import ReactDOM from "react-dom";
import CreateNewTripBtn from "./CreateNewTripBtn";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CreateNewTripBtn loggedIn={false} createTrip={() => {}} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
