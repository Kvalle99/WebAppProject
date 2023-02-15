import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import DestinationCard from "./DestinationCard";

test("When destination change, the change booking function should be called", async () => {
  let newDest = "";
  render(
    <DestinationCard
      destinationName={"test dest"}
      destinationDescription={"test desc"}
      destinationPicture={"./SampleCity.jpg"}
      destinationActivities={["activity 1", "activity 2", "activty 3"]}
      changeDest={(newD: string) => {
        newDest = newD;
      }}
    />
  );

  expect(newDest == "test dest");
});
