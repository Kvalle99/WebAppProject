import React, { FC } from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Page } from "../plan-sidenav/PlanSidenav";
import styles from "./sidenav-listitem.module.css";

interface SidenavListItemProps {
  listText: string;
  changeView: Function;
  active: Boolean;
  thisPage: Page;
  disabled: boolean;
}

function SidenavListItem(props: SidenavListItemProps) {
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

export default SidenavListItem;
