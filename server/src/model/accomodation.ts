import { Destination } from "./destinations";

export class Accomodation {
  private name: string;
  private id: number;
  private rating: number;
  private price: number;
  private description: string;
  //TODO: add Destination object as city, instead of "City" (city),
  private city: Destination;

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

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getPrice(): number {
    return this.price;
  }

  getRating(): number {
    return this.rating;
  }
  getDescription(): string {
    return this.description;
  }
  getCity(): string {
    return this.city.getCity();
  }
  getCountry(): string {
    return this.city.getCountry();
  }
}
