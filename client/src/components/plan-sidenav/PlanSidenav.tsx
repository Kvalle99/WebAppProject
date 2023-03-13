import React, { FC, useState } from "react";
import SidenavListItem from "../sidenav-listitem/SidenavListItem";
import "./plan-sidenav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import OverviewListItem from "../OverviewListItem/OverviewListItem";

interface PlanSidenavProps {
  changeView: Function;
  currentPage: Page;
  trip: any;
  loggedIn: boolean;
}

export enum Page {
  DESTINATION,
  CALENDAR,
  ACCOMODATION,
  ACTIVITY,
}

/* const PlanSidenav: FC<PlanSidenavProps> = () => (
  <div classNameName={styles.PlanSidenav}>PlanSidenav Component</div>
); */

function PlanSidenav(props: PlanSidenavProps) {
  return (
    <ListGroup className="list-group list-group-flush">
      <SidenavListItem
        listText="Destination"
        changeView={props.changeView}
        active={props.currentPage === Page.DESTINATION}
        thisPage={Page.DESTINATION}
        disabled={false}
      ></SidenavListItem>
      <SidenavListItem
        listText="Duration"
        changeView={props.changeView}
        active={props.currentPage === Page.CALENDAR}
        thisPage={Page.CALENDAR}
        disabled={props.trip == null}
      ></SidenavListItem>
      <SidenavListItem
        listText="Accommodation"
        changeView={props.changeView}
        active={props.currentPage === Page.ACCOMODATION}
        thisPage={Page.ACCOMODATION}
        disabled={false}
      ></SidenavListItem>
      <SidenavListItem
        listText="Activities"
        changeView={props.changeView}
        active={props.currentPage === Page.ACTIVITY}
        thisPage={Page.ACTIVITY}
        disabled={false}
      ></SidenavListItem>
      <OverviewListItem
        trip={props.trip}
        loggedIn={props.loggedIn}
      ></OverviewListItem>
    </ListGroup>
  );
}

export default PlanSidenav;
