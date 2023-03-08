import React, { FC, useState } from "react";
import SidenavListitem from "../sidenav-listitem/sidenav-listitem";
import "./plan-sidenav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import OverviewListItem from "../overviewListItem/overviewListItem";

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
      <SidenavListitem
        listText="Destination"
        changeView={props.changeView}
        active={props.currentPage === Page.DESTINATION}
        thisPage={Page.DESTINATION}
        disabled={false}
      ></SidenavListitem>
      <SidenavListitem
        listText="Duration"
        changeView={props.changeView}
        active={props.currentPage === Page.CALENDAR}
        thisPage={Page.CALENDAR}
        disabled={props.trip == null}
      ></SidenavListitem>
      <SidenavListitem
        listText="Accomodation"
        changeView={props.changeView}
        active={props.currentPage === Page.ACCOMODATION}
        thisPage={Page.ACCOMODATION}
        disabled={false}
      ></SidenavListitem>
      <SidenavListitem
        listText="Activities"
        changeView={props.changeView}
        active={props.currentPage === Page.ACTIVITY}
        thisPage={Page.ACTIVITY}
        disabled={false}
      ></SidenavListitem>
      <OverviewListItem trip={props.trip}></OverviewListItem>
    </ListGroup>
  );
}

export default PlanSidenav;
