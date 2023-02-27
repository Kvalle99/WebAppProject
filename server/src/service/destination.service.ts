import { Destination } from "../model/destinations";

export class DestinationService {
  destinations: Destination[] = [
    new Destination("New York", "USA"),
    new Destination("Chiang Mai", "Thailand"),
    new Destination("Paris", "France"),
    new Destination("Gothenburg", "Sweden"),
    new Destination("Stockholm", "Sweden"),
    new Destination("Madrid", "Spain"),
  ];

  getDestinations(searchText: string) {
    let matchingDestinations = this.destinations.filter(
      (destination: Destination) => {
        const cityMatch = destination.city
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const countryMatch = destination.country
          .toLowerCase()
          .includes(searchText.toLowerCase());
        return countryMatch || cityMatch;
      }
    );
    return matchingDestinations;
  }
}
