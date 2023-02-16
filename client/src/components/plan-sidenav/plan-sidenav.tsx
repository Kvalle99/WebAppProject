import React, { FC } from "react";
import SidenavListitem from "../sidenav-listitem/sidenav-listitem";
import "./plan-sidenav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

interface PlanSidenavProps {
  changeView: Function;
  current: string;
}

/* const PlanSidenav: FC<PlanSidenavProps> = () => (
  <div classNameName={styles.PlanSidenav}>PlanSidenav Component</div>
); */

function PlanSidenav(props: PlanSidenavProps) {
  return (
    <ListGroup className="list-group list-group-flush">
      <SidenavListitem
        listText="Destination"
        changView={props.changeView}
        currentPage={props.current}
      ></SidenavListitem>
      <SidenavListitem
        listText="Duration"
        changView={props.changeView}
        currentPage={props.current}
      ></SidenavListitem>
      <SidenavListitem
        listText="Accomodation"
        changView={props.changeView}
        currentPage={props.current}
      ></SidenavListitem>
      <SidenavListitem
        listText="Activities"
        changView={props.changeView}
        currentPage={props.current}
      ></SidenavListitem>
      <SidenavListitem
        listText="yo"
        changView={props.changeView}
        currentPage={props.current}
      ></SidenavListitem>
    </ListGroup>
  );
}

export default PlanSidenav;
