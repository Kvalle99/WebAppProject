import AccomodationCard from "../../components/accomodationCard/accomodationCard";
import PlanSidenav from "../../components/plan-sidenav/plan-sidenav";
import "./AccomodationView.css";

function AccomodationView() {
  return (
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
  );
}

export default AccomodationView;
