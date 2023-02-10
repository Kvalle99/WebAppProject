import React, { FC } from "react";
import SidenavListitem from "../sidenav-listitem/sidenav-listitem";
import styles from "./plan-sidenav.module.css";

interface PlanSidenavProps {}

/* const PlanSidenav: FC<PlanSidenavProps> = () => (
  <div className={styles.PlanSidenav}>PlanSidenav Component</div>
); */

function PlanSidenav() {
  return (
    <ul className="list-group list-group-flush">
      <SidenavListitem listText="Destination"></SidenavListitem>
      <SidenavListitem listText="Duration"></SidenavListitem>
      <SidenavListitem listText="Accomodation"></SidenavListitem>
      <SidenavListitem listText="Activities"></SidenavListitem>
      <SidenavListitem listText="yo"></SidenavListitem>
    </ul>
  );
}

export default PlanSidenav;
