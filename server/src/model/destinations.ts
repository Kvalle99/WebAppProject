// Represents a destination
export class Destination {
  private city: string;
  private country: string;
  private description: string;
  private image: string;

  constructor(name: string, country: string, desc: string, img: string) {
    this.city = name;
    this.country = country;
    this.description = desc;
    this.image = img;
  }

  getCity(): string {
    return this.city;
  }
  getCountry(): string {
    return this.country;
  }
  getDescription(): string {
    return this.description;
  }
  getImage(): string {
    return this.image;
  }
}
