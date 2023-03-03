import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AccomodationCard from "../../../components/accomodationCard/accomodationCard";
import "./AccomodationView.css";

export interface Accomodation {
  name: string;
  id: number;
  rating: number;
  price: number;
  description: string;
  city: { city: string; country: string };
}
interface accomodationViewProps {
  changeAccomodation: Function;
  currentAcc: string;
  currentDest: string;
  searchText: string;
}

function AccomodationView(props: accomodationViewProps) {
  const [accomodations, setAccomodations] = useState<Accomodation[] | null>(
    null
  );
  useEffect(() => {
    getAccomodations();
  }, [props.searchText, props.currentDest]);

  return (
    <Container>
      <Row xs={1} md={1}>
        {accomodations?.map((accomodation) => (
          <AccomodationCard
            accomodationName={accomodation.name}
            accommodationId={accomodation.id}
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
      .get("http://localhost:8080/accomodation/getAccomodations", {
        params: {
          destination: props.currentDest,
          searchText: props.searchText,
        },
      })
      .then((res) => {
        setAccomodations(res.data);
      });
    return;
  }
}

export default AccomodationView;
