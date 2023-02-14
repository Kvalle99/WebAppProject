import React, { FC } from "react";
import SidenavListitem from "../sidenav-listitem/sidenav-listitem";
import "./plan-sidenav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface PlanSidenavProps {
  changeView: Function;
}

/* const PlanSidenav: FC<PlanSidenavProps> = () => (
  <div classNameName={styles.PlanSidenav}>PlanSidenav Component</div>
); */

function PlanSidenav(props: PlanSidenavProps) {
  return (
    <ul className="list-group list-group-flush">
      <SidenavListitem
        listText="Destination"
        changView={props.changeView}
      ></SidenavListitem>
      <SidenavListitem
        listText="Duration"
        changView={props.changeView}
      ></SidenavListitem>
      <SidenavListitem
        listText="Accomodation"
        changView={props.changeView}
      ></SidenavListitem>
      <SidenavListitem
        listText="Activities"
        changView={props.changeView}
      ></SidenavListitem>
      <SidenavListitem
        listText="yo"
        changView={props.changeView}
      ></SidenavListitem>
    </ul>
  );
}

export default PlanSidenav;
