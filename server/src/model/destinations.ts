export class Destination {
  private city: string;
  private country: string;

  constructor(name: string, country: string) {
    this.city = name;
    this.country = country;
  }

  getCity(): string {
    return this.city;
  }
  getCountry(): string {
    return this.country;
  }
}
