export class Destination {
  private city: string;
  private country: string;
  private description : string

  constructor(name: string, country: string, desc : string) {
    this.city = name;
    this.country = country;
    this.description = desc
  }

  getCity(): string {
    return this.city;
  }
  getCountry(): string {
    return this.country;
  }
}
