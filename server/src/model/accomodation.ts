import { Destination } from "./destinations";

export class Accomodation {
  name: string;
  id: number;
  rating: number;
  price: number;
  description: string;
  //TODO: add Destination object as city, instead of "City" (city),
  city: Destination;

  constructor(
    name: string,
    id: number,
    rating: number,
    price: number,
    description: string,
    city: string,
    country: string
  ) {
    this.name = name;
    this.id = id;
    this.rating = rating;
    this.price = price;
    this.description = description;
    this.city = new Destination(city, country);
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getPrice() {
    return this.price;
  }

  getRating() {
    return this.rating;
  }
  getDescription() {
    return this.description;
  }
  getCity() {
    return this.city.city;
  }
}
