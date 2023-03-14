import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ActivityCard from "./activityCard";

test("When activity change, the change booking function should be called", async () => {
  let newActivity = "";
  render(
    <ActivityCard
      activityName={"Test act"}
      activityDesc={"fun activity"}
      activityAdder={(act: string) => {
        newActivity = act;
      }}
      trip={undefined}
    />
  );
  const btn = await screen.findByText("Add activity");
  expect(btn).toBeInTheDocument();
  act(() => {
    fireEvent.click(btn);
  });
  expect(newActivity).toMatch("Test act");
});
