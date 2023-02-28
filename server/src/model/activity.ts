import { ourDate } from "./date";
export class Activity {
  name: string;
  description: string;
  inDestination : string;
  ratings: number[] = [];
  startDate?: Date;
  endDate?: Date;
  constructor(
    name: string,
    description: string,
    inDestination: string,
    startDate?: Date,
    endDate?: Date
  ) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.inDestination = inDestination;
  }

  getDescription(): string {
    return this.description;
  }

  changeDescription(description: string): void {
    this.description = description;
  }

  addNewRating(newRating: number): void {
    this.ratings.push(newRating);
  }

  getAverageRating(): number {
    let averageRating = undefined;
    if (this.ratings.length !== 0) {
      let totalRatingScore = this.ratings.reduce(
        (a: number, b: number) => a + b,
        0
      );
      averageRating = Number(totalRatingScore) / this.ratings.length;
    }
    return (averageRating ||= 0); //If averageRating is undefined, set it to 0
  }

  getName() : string {
    return this.name;
  }

  getDestination() : string {
    return this.inDestination;
  }
}
