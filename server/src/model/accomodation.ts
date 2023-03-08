import { Destination } from "./destinations";

export class Accomodation {
  private name: string;
  private id: number;
  private description: string;
  //TODO: add Destination object as city, instead of "City" (city),
  private city: string;
  private country: string;

  constructor(
    name: string,
    id: number,
    description: string,
    city: string,
    country: string
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.city = city;
    this.country = country;
  }

  getName(): string {
    return this.name;
  }
  getId(): number {
    return this.id;
  }
  getDescription(): string {
    return this.description;
  }
  getCity(): string {
    return this.city;
  }
  getCountry(): string {
    return this.country;
  }
}
