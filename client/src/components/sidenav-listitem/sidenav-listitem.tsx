import React, { FC } from "react";
import { ListGroupItem } from "react-bootstrap";
import { Page } from "../plan-sidenav/plan-sidenav";
import styles from "./sidenav-listitem.module.css";

interface SidenavListitemProps {
  listText: string;
  changeView: Function;
  active: Boolean;
  thisPage: Page;
}

function SidenavListitem(props: SidenavListitemProps) {
  return (
    <ListGroupItem
      role="button"
      onClick={() => click(props.thisPage)}
      variant={props.active ? "success" : ""}
    >
      {props.listText}
    </ListGroupItem>
  );

  function click(s: Page) {
    props.changeView(s);
  }
}

export default SidenavListitem;
