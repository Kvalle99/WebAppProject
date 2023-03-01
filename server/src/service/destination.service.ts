import { Destination } from "../model/destinations";

export class DestinationService {
  destinations: Destination[] = [
    new Destination("New York", "USA", "The Big Apple!"),
    new Destination("Chiang Mai", "Thailand", "Has great jungles."),
    new Destination("Paris", "France", "Experience the best of French culture"),
    new Destination("Gothenburg", "Sweden", "Best accent, enna!"),
    new Destination("Stockholm", "Sweden", "Not recommended if you like fun"),
    new Destination("Madrid", "Spain", "Maybe go for some tapas?"),
  ];

  getDestinations(searchText: string) {
    let matchingDestinations = this.destinations.filter(
      (destination: Destination) => {
        const cityMatch = destination.getCity()
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const countryMatch = destination.getCountry()
          .toLowerCase()
          .includes(searchText.toLowerCase());
        return countryMatch || cityMatch;
      }
    );
    return matchingDestinations;
  }
}
