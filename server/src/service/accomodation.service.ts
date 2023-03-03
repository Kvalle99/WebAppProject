import { Accomodation } from "../model/accomodation";
import { IAccomodationService } from "./iaccomodation.service";

//TODO: add interface
export class AccomodationService implements IAccomodationService{
  hotelList = [
    new Accomodation(
      "Hotel 1",
      200,
      4,
      3000,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg",
      "Sweden"
    ),
    new Accomodation(
      "Appartment 1",
      23000,
      3,
      1000,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg",
      "Sweden"
    ),
    new Accomodation(
      "Hotel 2",
      1,
      5,
      2500,
      "Hotel 1, Gothenburg ligger 4,1 km från Liseberg. Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "Gothenburg",
      "Sweden"
    ),
    new Accomodation(
      "Four Seasons",
      280345,
      5,
      2500,
      "Four Seasons, New York ligger 4,1 km från Liseberg (?). Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "New York",
      "USA"
    ),
    new Accomodation(
      "Brooklyn House",
      4829,
      5,
      2500,
      "Brooklyn house, New York ligger 4,1 km från Liseberg(?). Gäster som vill träna har tillgång till ett gym och kan sedan besöka CuckoosNest, som specialiserar sig på internationell gastronomi ochserverar frukost och middag. Dessutom får gäster tillgång tillen bar/lounge, en bastu och en snackbar/deli på detta hotell ilyxstil. Den hjälpsamma personalen och restaurangen brukar fåhöga betyg av våra resenärer.",
      "New York",
      "USA"
    ),
    new Accomodation(
      "Backpackers paradise",
      90324,
      2,
      200,
      "backpackers paradise",
      "Chiang Mai",
      "Thailand"
    ),
    new Accomodation(
      "stockholm centralstation",
      7843,
      1,
      10,
      "Nära till centralen men kanske inte så trevligt",
      "Stockholm",
      "Sweden"
    ),
    new Accomodation(
      "Grand Hotel",
      583425,
      5,
      10000,
      "Glassigt!",
      "Stockholm",
      "Sweden"
    ),
    new Accomodation(
      "Madrid Plaza",
      74739,
      4,
      1000,
      "Wow! What a place!",
      "Madrid",
      "Spain"
    ),
  ];

  getAccomodations(destination: string, searchText: string) {
    var toReturn: Accomodation[] = [];
    console.log("destination: " + destination);

    toReturn = this.hotelList.filter((accomodation: Accomodation) => {
      const cityMatch =
        accomodation.getCity().toLowerCase() === destination.toLowerCase() ||
        destination === "";
      const searchMatch =
        accomodation
          .getName()
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        accomodation.getId().toString().includes(searchText);
      return cityMatch && searchMatch;
    });

    return toReturn;
  }
  generateID() {
    const id = Math.floor(Math.random() * 100000);
    if (this.isExists(id)) {
      this.generateID();
    }
    return id;
  }

  isExists(id: number): boolean {
    let res: boolean = false;
    var result = this.hotelList.find((hotel) => {
      return hotel.getId() === id;
    });
    result === undefined ? (res = false) : (res = true);
    return res;
  }
}
