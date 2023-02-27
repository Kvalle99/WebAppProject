import React, { FC } from "react";
import { ListGroupItem } from "react-bootstrap";
import styles from "./sidenav-listitem.module.css";

interface SidenavListitemProps {
  listText: string;
  lastChild?: Boolean;
  changView: Function;
  currentPage: string;
}

function SidenavListitem(props: SidenavListitemProps) {
  if (props.lastChild == null) {
    return (
      <ListGroupItem
        role="button"
        onClick={() => click(props.listText)}
        variant={currentChoice() ? "success" : ""}
      >
        {props.listText}
      </ListGroupItem>
    );
  } else {
    return (
      <li
        className={
          "list-group-item " + (currentChoice() ? "background-color:green" : "")
        }
        id="lastChild"
        role="button"
        onClick={props.changView(props.listText)}
      >
        {props.listText}
      </li>
    );
  }

  function click(s: string) {
    props.changView(s);
  }

  function currentChoice(): boolean {
    if (props.currentPage == props.listText) {
      console.log("true");
      return true;
    }
    return false;
  }
}

export default SidenavListitem;
