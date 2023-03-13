import { act, fireEvent, render, screen } from "@testing-library/react";
import axios, { AxiosStatic } from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import AccomodationView from "./AccomodationView";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<AxiosStatic>;

test("Should send GET to localhost", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: "test hotel",
        rating: 3,
        price: 500,
        description: "test desc",
        city: "Gothenburg",
        country: "Sweden",
      },
    ],
  });
  render(
    <AccomodationView
      currentAcc={""}
      currentDest={""}
      changeAccomodation={() => {}}
      searchText={""}
      trip={undefined}
    />
  );
  expect(mockedAxios.get).toHaveBeenCalledWith(
    "http://localhost:8080/accomodation/getAccomodations",
    { params: { destination: "", searchText: "" } }
  );
  const acc = await screen.findByText("test hotel");
  const btn = await screen.findByText("Choose");
  expect(btn).toBeInTheDocument();
  expect(acc).toBeInTheDocument();
});

test("Accomodation change, the change call to backend should be executed", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: "test hotel",
        rating: 3,
        price: 500,
        description: "test desc",
        city: "gothenburg",
        country: "Sweden",
      },
    ],
  });

  let change = false;
  render(
    <AccomodationView
      currentAcc={""}
      currentDest={""}
      changeAccomodation={() => {
        change = true;
      }}
      searchText={""}
      trip={undefined}
    />
  );
  const button = await screen.findByRole("changeAcc");
  act(() => {
    fireEvent.click(button);
  });
  expect((change = true));
});
