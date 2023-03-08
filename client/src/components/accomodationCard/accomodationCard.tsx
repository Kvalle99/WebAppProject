import React, { FC } from "react";
import styles from "./accomodationCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface AccomodationCardProps {
  accomodationName: string;
  accommodationId: number;
  accomodationStars: number;
  accomodationPriceFrom: number;
  accomodationDescription: string;
  accomodationCity: string;
  accomodationImgSrc?: string;
  changeBooking: Function;
  currentAccomodation: string;
  disabled: boolean;
}

/* const AccomodationCard: FC<AccomodationCardProps> = () => (
  <div className={styles.AccomodationCard}>
    AccomodationCard Component
  </div>
); */

function AccomodationCard(props: AccomodationCardProps) {
  return (
    <div className="col-12 mt-3">
      <Card
        className={
          "card-horizontal border border-4 " +
          (currentChoice() ? "border-success" : "")
        }
        style={{ height: "164px" }}
      >
        <div style={{ display: "flex", height: "800%" }}>
          <img
            style={{ width: "200px", height: "fit-content" }}
            src={require("../../images/" + props.accomodationImgSrc)}
            alt="Card image cap"
          />

          <div
            className="card-body"
            style={{ height: "164px", overflow: "auto" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="card-title">{props.accomodationName}</h4>

              <Button
                variant={props.disabled ? "primary disabled" : "primary"}
                role="changeAcc"
                onClick={updateHotel}
              >
                Choose
              </Button>
            </div>
            <p>{props.accomodationCity}</p>
            <p className="card-text">{props.accomodationDescription}</p>
          </div>
        </div>
      </Card>
    </div>
  );

  function updateHotel() {
    props.changeBooking(props.accomodationName, props.accomodationCity);
  }

  function currentChoice(): boolean {
    if (props.accomodationName == props.currentAccomodation) {
      return true;
    }
    return false;
  }
}

export default AccomodationCard;
