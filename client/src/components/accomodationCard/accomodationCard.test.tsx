import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import AccomodationCard from "./accomodationCard";

test("When accomodation change, the change booking function should be called", async () => {
  let newAcc = "";
  render(
    <AccomodationCard
      accomodationName={"test"}
      accommodationId={500}
      accomodationDescription={"Test description"}
      accomodationCity={"Gothenburg"}
      accomodationImgSrc={"hotel1.jpg"}
      changeBooking={(name: string) => {
        newAcc = name;
      }}
      currentAccomodation={""}
      disabled={false}
    />
  );
  const btn = await screen.findByText("Choose");
  expect(btn).toBeInTheDocument();
  act(() => {
    fireEvent.click(btn);
  });
  expect(newAcc).toMatch("test");
});
