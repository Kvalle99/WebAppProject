import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchBar searchUpdate={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
