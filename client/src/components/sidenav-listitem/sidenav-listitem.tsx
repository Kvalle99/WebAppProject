import React, { FC } from "react";
import styles from "./sidenav-listitem.module.css";

interface SidenavListitemProps {
  listText: string;
  lastChild?: Boolean;
}

/* const SidenavListitem: FC<SidenavListitemProps> = () => (
  <div className={styles.SidenavListitem}>
    SidenavListitem Component
  </div>
); */

function SidenavListitem(props: SidenavListitemProps) {
  if (props.lastChild == null) {
    return (
      <li className="list-group-item" role="button">
        {props.listText}
      </li>
    );
  } else {
    return (
      <li className="list-group-item" id="lastChild" role="button">
        {props.listText}
      </li>
    );
  }
}

export default SidenavListitem;
