import React, { FC, useState } from "react";
import SidenavListitem from "../sidenav-listitem/sidenav-listitem";
import "./plan-sidenav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

interface PlanSidenavProps {
  changeView: Function;
  currentPage: Page;
}

export enum Page {
  DESTINATION,
  CALENDAR,
  ACCOMODATION,
  ACTIVITY,
  SUMMARY,
}

/* const PlanSidenav: FC<PlanSidenavProps> = () => (
  <div classNameName={styles.PlanSidenav}>PlanSidenav Component</div>
); */

function PlanSidenav(props: PlanSidenavProps) {
  return (
    <ListGroup className="list-group list-group-flush">
      <SidenavListitem
        listText="Destination"
        changeView={props.changeView}
        active={props.currentPage === Page.DESTINATION}
        thisPage={Page.DESTINATION}
      ></SidenavListitem>
      <SidenavListitem
        listText="Duration"
        changeView={props.changeView}
        active={props.currentPage === Page.CALENDAR}
        thisPage={Page.CALENDAR}
      ></SidenavListitem>
      <SidenavListitem
        listText="Accomodation"
        changeView={props.changeView}
        active={props.currentPage === Page.ACCOMODATION}
        thisPage={Page.ACCOMODATION}
      ></SidenavListitem>
      <SidenavListitem
        listText="Activities"
        changeView={props.changeView}
        active={props.currentPage === Page.ACTIVITY}
        thisPage={Page.ACTIVITY}
      ></SidenavListitem>
      <SidenavListitem
        listText="Trip Summary"
        changeView={props.changeView}
        active={false}
        thisPage={Page.SUMMARY}
      ></SidenavListitem>
    </ListGroup>
  );
}

export default PlanSidenav;
