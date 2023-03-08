import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import SearchBar from "./SearchBar";

test("Search call", async () => {
  var searchValue = "";
  render(
    <SearchBar
      searchUpdate={(value: string) => {
        searchValue = value;
      }}
    />
  );

  const searchfield = await screen.findByText("Search");
  act(() => {
    fireEvent.change(searchfield, { target: { value: "test search" } });
  });

  expect((searchValue = "test search"));
});
