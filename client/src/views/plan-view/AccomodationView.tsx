import axios from "axios";
import { useEffect, useState } from "react";
import AccomodationCard from "../../components/accomodationCard/accomodationCard";
import "./AccomodationView.css";

export interface Accomodation {
  name: string;
  rating: number;
  price: number;
  description: string;
  //TODO: add Destination object as city, instead of "City" (city),
  city: string;
}
interface accomodationViewProps {
  tripId?: string;
}

function AccomodationView(props: accomodationViewProps) {
  //console.log(accomodationList);
  const [accomodations, setAccomodations] = useState<Accomodation[] | null>(
    null
  );
  useEffect(() => {
    getAccomodations();
  }, []);
  return (
    <ul>
      {accomodations?.map((accomodation) => (
        <li>
          <AccomodationCard
            accomodationName={accomodation.name}
            accomodationStars={accomodation.rating}
            accomodationPriceFrom={accomodation.price}
            accomodationCity={accomodation.city}
            accomodationDescription={accomodation.description}
            accomodationImgSrc={"hotel1.jpg"}
            changeBooking={changeAccomodation}
          />
        </li>
      ))}
    </ul>
  );

  function changeAccomodation(name: string) {
    console.log("change to: ", name);
    const res = axios
      .post("http://localhost:8080/trip/changeAccomodations", {
        id: props.tripId,
        accomodationName: name,
      })
      .then((res) => {
        console.log(res.status);
      });
  }
  async function getAccomodations() {
    const res = await axios
      .get("http://localhost:8080/accomodation/getAccomodations", {})
      .then((res) => {
        setAccomodations(res.data);
      });
    return;
  }
}

/**  return (
    <div className="row-1 justify-content-center">
      <div className="column right">
        <AccomodationCard
          accomodationName={"Hotel 1"}
          accomodationStars={4}
          accomodationPriceFrom={3000}
          accomodationDescription={
            "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer."
          }
          accomodationCity={"Gothenburg, Sweden"}
          accomodationImgSrc={"hotel1.jpg"}
        />
        <AccomodationCard
          accomodationName={"Appartment 1"}
          accomodationStars={3}
          accomodationPriceFrom={1000}
          accomodationDescription={
            "Appartment 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer."
          }
          accomodationCity={"Gothenburg, Sweden"}
          accomodationImgSrc={"app1.jpg"}
        />
        <AccomodationCard
          accomodationName={"Hotel 2"}
          accomodationStars={5}
          accomodationPriceFrom={2500}
          accomodationDescription={
            "Hotel 2, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer."
          }
          accomodationCity={"Gothenburg, Sweden"}
          accomodationImgSrc={"hotel2.jpg"}
        />
      </div>
    </div>
  ); */

export default AccomodationView;
