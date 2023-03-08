import React, { FC } from "react";
import { ListGroupItem } from "react-bootstrap";
import { Page } from "../plan-sidenav/plan-sidenav";
import styles from "./sidenav-listitem.module.css";

interface SidenavListitemProps {
  listText: string;
  changeView: Function;
  active: Boolean;
  thisPage: Page;
  disabled: boolean;
}

function SidenavListitem(props: SidenavListitemProps) {
  return (
    <>
      {props.disabled ? (
        <ListGroupItem
          role="button"
          variant="disabled"
          style={{ backgroundColor: "rgb(230, 230, 230)" }}
        >
          {props.listText}
        </ListGroupItem>
      ) : (
        <ListGroupItem
          role="button"
          onClick={() => click(props.thisPage)}
          variant={props.active ? "success" : ""}
        >
          {props.listText}
        </ListGroupItem>
      )}
    </>
  );

  function click(s: Page) {
    props.changeView(s);
  }
}

export default SidenavListitem;
