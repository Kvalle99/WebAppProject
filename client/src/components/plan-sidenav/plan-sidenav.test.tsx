import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import PlanSidenav, { Page } from "./plan-sidenav";

test("Render and press sidenav button", async () => {
  var currentPage = Page.DESTINATION;

  render(
    <PlanSidenav
      changeView={changeView}
      currentPage={currentPage}
      loggedIn={false}
      trip={null}
    />
  );
  const btn = await screen.findByText("Accomodation");
  expect(btn).toBeInTheDocument();
  act(() => {
    fireEvent.click(btn);
  });
  function changeView(newView: Page) {
    currentPage = newView;
  }
  expect((currentPage = Page.ACCOMODATION));
});
