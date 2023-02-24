import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AccomodationCard from "../../../components/accomodationCard/accomodationCard";
import "./AccomodationView.css";

export interface Accomodation {
  name: string;
  rating: number;
  price: number;
  description: string;
  city: { city: string; country: string };
}
interface accomodationViewProps {
  changeAccomodation: Function;
  currentAcc: string;
  currentDest: string;
}

function AccomodationView(props: accomodationViewProps) {
  const [accomodations, setAccomodations] = useState<Accomodation[] | null>(
    null
  );
  console.log("current acc" + props.currentAcc);
  useEffect(() => {
    getAccomodations();
  }, []);
  return (
    <Container>
      <Row xs={1} md={1}>
        {accomodations?.map((accomodation) => (
          <AccomodationCard
            accomodationName={accomodation.name}
            accomodationStars={accomodation.rating}
            accomodationPriceFrom={accomodation.price}
            accomodationCity={accomodation.city.city}
            accomodationDescription={accomodation.description}
            accomodationImgSrc={"hotel1.jpg"}
            changeBooking={changeAccomodation}
            key={accomodation.name}
            currentAccomodation={props.currentAcc}
          />
        ))}
      </Row>
    </Container>
  );

  function changeAccomodation(name: string, city: string) {
    props.changeAccomodation(name, city);
  }
  async function getAccomodations() {
    const res = await axios
      .post("http://localhost:8080/accomodation/getAccomodations", {
        destination: props.currentDest,
      })
      .then((res) => {
        console.log(res.data);
        setAccomodations(res.data);
      });
    return;
  }
}

export default AccomodationView;
