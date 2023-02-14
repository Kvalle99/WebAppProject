import { Destination } from "../model/destinations";

export class DestinationService {
  destinations: Destination[] = [
    new Destination("New York", "USA"),
    new Destination("Chiang Mai", "Thailand"),
    new Destination("Paris", "France"),
    new Destination("Gothenburg", "Sweden"),
  ];

  getDestinations() {
    return this.destinations;
  }
}
