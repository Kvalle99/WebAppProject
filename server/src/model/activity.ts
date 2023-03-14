
// Represents an activity in a certain destination
export class Activity {
  private name: string;
  private description: string;
  private city: string;
  private id: number;
  constructor(
    id: number,
    name: string,
    description: string,
    inDestination: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.city = inDestination;
  }

  getDescription(): string {
    return this.description;
  }

  getName(): string {
    return this.name;
  }

  getCity(): string {
    return this.city;
  }

  getId(): number {
    return this.id;
  }
}
