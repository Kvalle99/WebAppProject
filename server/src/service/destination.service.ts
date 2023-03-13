import { Destination } from "../model/destinations";
import { IDestinationService } from "./idestination.service";

// Service for calls dealing with destinations
export class DestinationService implements IDestinationService {
  // No database = hardcoded destinations
  destinations: Destination[] = [
    new Destination("New York", "USA", "The Big Apple!", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"),
    new Destination("Chiang Mai", "Thailand", "Has great jungles.", "https://a.cdn-hotels.com/gdcs/production9/d679/184d7edf-5c3a-470c-8529-b0085d6d5b0e.jpg?impolicy=fcrop&w=800&h=533&q=medium"),
    new Destination("Paris", "France", "Experience the best of French culture", "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"),
    new Destination("Gothenburg", "Sweden", "Best accent, enna!", "https://www.boktugg.se/wp-content/uploads/2019/01/Goteborg-sparvagn-iStock-495376272.jpg"),
    new Destination("Stockholm", "Sweden", "Not recommended if you like fun", "https://media.timeout.com/images/105171709/image.jpg"),
    new Destination("Madrid", "Spain", "Maybe go for some tapas?", "https://www.folkuniversitetet.se/contentassets/2b5398e3897f41eb9906a1fbb6063fc7/spanska-madrid.jpg?preset=article600"),
  ];

  // Returns all destinations matching search string
  // Does not use search service since that function is slightly different
  getDestinations(searchText: string) : Destination[] {
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
