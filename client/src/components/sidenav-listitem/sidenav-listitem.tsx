import React, { FC } from "react";
import styles from "./sidenav-listitem.module.css";

interface SidenavListitemProps {
  listText: string;
  lastChild?: Boolean;
  changView: Function;
}

/* const SidenavListitem: FC<SidenavListitemProps> = () => (
  <div className={styles.SidenavListitem}>
    SidenavListitem Component
  </div>
); */

function SidenavListitem(props: SidenavListitemProps) {
  if (props.lastChild == null) {
    return (
      <li
        className="list-group-item"
        role="button"
        onClick={() => click(props.listText)}
      >
        {props.listText}
      </li>
    );
  } else {
    return (
      <li
        className="list-group-item"
        id="lastChild"
        role="button"
        onClick={props.changView(props.listText)}
      >
        {props.listText}
      </li>
    );
  }

  function click(s: string) {
    props.changView(s);
  }
}

export default SidenavListitem;
