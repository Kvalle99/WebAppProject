import { Accomodation } from "../model/accomodation";
import { IAccomodationService } from "./iaccomodation.service";
import { filterOnDestNameId } from "./searching.service";

// Handles front-end calls concerning accomodation
export class AccomodationService implements IAccomodationService {
  // Since we have no database, the service needs a list of accomodations in the code
  hotelList = [
    new Accomodation(
      "Hotel 1",
      4,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg",
      "Sweden"
    ),
    new Accomodation(
      "Appartment 1",
      3,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg",
      "Sweden"
    ),
    new Accomodation(
      "Hotel 2",
      5,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg",
      "Sweden"
    ),
    new Accomodation(
      "Four Seasons",
      280345,
      "Four Seasons, New York ligger 4,1 km från Liseberg (?). Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "New York",
      "USA"
    ),
    new Accomodation(
      "Brooklyn House",
      4829,
      "Brooklyn house, New York ligger 4,1 km från Liseberg(?). Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "New York",
      "USA"
    ),
    new Accomodation(
      "Backpackers paradise",
      90324,
      "backpackers paradise",
      "Chiang Mai",
      "Thailand"
    ),
    new Accomodation(
      "stockholm centralstation",
      7843,
      "Nära till centralen men kanske inte så trevligt",
      "Stockholm",
      "Sweden"
    ),
    new Accomodation("Grand Hotel", 583425, "Glassigt!", "Stockholm", "Sweden"),
    new Accomodation(
      "Madrid Plaza",
      74739,
      "Wow! What a place!",
      "Madrid",
      "Spain"
    ),
  ];

  // Uses search service to return all accomodations in destination matching search string
  getAccomodations(destination: string, searchText: string): Accomodation[] {
    return filterOnDestNameId(this.hotelList, destination, searchText);
  }
}
