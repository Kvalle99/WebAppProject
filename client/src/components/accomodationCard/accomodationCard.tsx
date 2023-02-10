import React, { FC } from "react";
import styles from "./accomodationCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface AccomodationCardProps {
  accomodationName: string;
  accomodationStars: number;
  accomodationPriceFrom: number;
  accomodationDescription: string;
  accomodationCity: string;
  accomodationImgSrc: string;
}

/* const AccomodationCard: FC<AccomodationCardProps> = () => (
  <div className={styles.AccomodationCard}>
    AccomodationCard Component
  </div>
); */

function AccomodationCard(props: AccomodationCardProps) {
  /* let img_src =  */
  /* console.log(img_src); */
  return (
    <div className="row">
      <div className="col-12 mt-3">
        <div className="card" style={{ height: "164px" }}>
          <div
            className="card-horizontal"
            style={{ display: "flex", height: "100%" }}
          >
            <div className="img-square-wrapper" style={{ width: "300px" }}>
              <img
                className="{styles.accImg}"
                src={require("../../images/" + props.accomodationImgSrc)}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">{props.accomodationName}</h4>
              <p>{props.accomodationCity}</p>
              <p className="card-text">{props.accomodationDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccomodationCard;
