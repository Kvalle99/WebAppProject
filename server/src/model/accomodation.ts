import { Destination } from "./destinations";

// Represents a hotel in a certain destination
export class Accomodation {
  private name: string;
  private id: number;
  private description: string;
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
