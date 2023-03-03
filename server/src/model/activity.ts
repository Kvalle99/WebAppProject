export class Activity {
  private name: string;
  private description: string;
  private inDestination: string;
  constructor(
    name: string,
    description: string,
    inDestination: string,
  ) {
    this.name = name;
    this.description = description;
    this.inDestination = inDestination;
  }

  getDescription(): string {
    return this.description;
  }

  changeDescription(description: string): void {
    this.description = description;
  }

  getName(): string {
    return this.name;
  }

  getDestination(): string {
    return this.inDestination;
  }
}
