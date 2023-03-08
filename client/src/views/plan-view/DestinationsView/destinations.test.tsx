import { act, fireEvent, render, screen } from "@testing-library/react";
import axios, { AxiosStatic } from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Destinations from "./destinations";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<AxiosStatic>;

test("Should send GET to localhost", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        city: "test dest",
        country: "Sweden",
      },
    ],
  });

  render(
    <Destinations
      currentDest={""}
      changeDest={() => {}}
      searchText={""}
      trip={undefined}
    />
  );
  expect(mockedAxios.get).toHaveBeenCalledWith(
    "http://localhost:8080/destination/getDestinations",
    { params: { searchText: "" } }
  );
  const dest = await screen.findByText("test dest, Sweden");

  expect(dest).toBeInTheDocument();
});

test("Destination change, the change call to backend should be executed", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        city: "test dest",
        country: "Sweden",
      },
    ],
  });

  mockedAxios.post.mockResolvedValue({
    status: 200,
  });
  let newDest = "";
  render(
    <Destinations
      currentDest={""}
      changeDest={(newName: string) => (newDest = newName)}
      searchText={""}
      trip={undefined}
    />
  );
  const button = await screen.findByRole("changeDest");
  act(() => {
    fireEvent.click(button);
  });

  expect(newDest == "test dest");
});
