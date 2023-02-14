import { Accomodation } from "../model/accomodation";

//TODO: add interface
export class AccomodationService {
  hotelList = [
    new Accomodation(
      "Hotel 1",
      4,
      3000,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg, Sweden"
    ),
    new Accomodation(
      "Appartment 1",
      3,
      1000,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg, Sweden"
    ),
    new Accomodation(
      "Hotel 2",
      5,
      2500,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg, Sweden"
    ),
  ];

  getAccomodations() {
    return this.hotelList;
  }
}
