export class Destination {
  city: string;
  country: string;

  constructor(name: string, country: string) {
    this.city = name;
    this.country = country;
  }

  getCity() {
    return this.city;
  }
  getCountry() {
    return this.country;
  }
}
