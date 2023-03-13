import { fireEvent, render, screen } from "@testing-library/react";
import axios, { AxiosStatic } from "axios";
import { act } from "react-dom/test-utils";
import ActivityView from "./ActivityView";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<AxiosStatic>;

test("Should send GET to localhost", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: "test activity",
        description: "very fun",
        inDestination: "Gothenburg",
      },
    ],
  });

  render(<ActivityView actAdder={() => {}} trip={null} searchText={""} />);
  expect(mockedAxios.get).toHaveBeenCalledWith(
    "http://localhost:8080/activity/getAllActivites",
    { params: { dest: undefined, searchText: "" } }
  );
  const acc = await screen.findByText("test activity");
  const btn = await screen.findByText("Add activity");
  expect(btn).toBeInTheDocument();
  expect(acc).toBeInTheDocument();
});

test("Activity change, the change call to backend should be executed", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: "test activity",
        description: "very fun",
        inDestination: "Gothenburg",
      },
    ],
  });

  let addedActivity = "";
  render(
    <ActivityView
      actAdder={(newAc: string) => {
        addedActivity = newAc;
      }}
      trip={null}
      searchText={""}
    />
  );
  const button = await screen.findByText("Add activity");
  act(() => {
    fireEvent.click(button);
  });
  expect((addedActivity = "test activity"));
});
