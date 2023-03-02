import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import AccomodationCard from "./accomodationCard";

test("When accomodation change, the change booking function should be called", async () => {
  let newAcc = "";
  render(
    <AccomodationCard
      accomodationName={"test"}
      accommodationId={500}
      accomodationPriceFrom={50}
      accomodationStars={1}
      accomodationDescription={"Test description"}
      accomodationCity={"Gothenburg"}
      accomodationImgSrc={"hotel1.jpg"}
      changeBooking={(name: string) => {
        newAcc = name;
      }}
      currentAccomodation={""}
    />
  );

  expect(newAcc == "test");
});
