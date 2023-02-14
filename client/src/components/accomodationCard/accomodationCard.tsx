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
  changeBooking: Function;
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
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="card-title">{props.accomodationName}</h4>

                <button className="btn btn-success" onClick={updateHotel}>
                  Choose
                </button>
              </div>
              <p>{props.accomodationCity}</p>
              <p className="card-text">{props.accomodationDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function updateHotel() {
    props.changeBooking(props.accomodationName);
  }
}

export default AccomodationCard;
