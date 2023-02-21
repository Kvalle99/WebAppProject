import { Destination } from "./destinations";

export class Accomodation {
  name: string;
  rating: number;
  price: number;
  description: string;
  //TODO: add Destination object as city, instead of "City" (city),
  city: Destination;

  constructor(
    name: string,
    rating: number,
    price: number,
    description: string,
    city: string,
    country: string
  ) {
    this.name = name;
    this.rating = rating;
    this.price = price;
    this.description = description;
    this.city = new Destination(city, country);
  }

  getName() {
    return this.name;
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
