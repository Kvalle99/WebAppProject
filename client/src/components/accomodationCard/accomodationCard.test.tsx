import React from "react";
import ReactDOM from "react-dom";
import AccomodationCard from "./accomodationCard";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AccomodationCard
      accomodationName="hej"
      accomodationPriceFrom={1}
      accomodationStars={1}
      accomodationDescription={""}
      accomodationCity={""}
      accomodationImgSrc={""}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
