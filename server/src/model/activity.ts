import { ourDate } from "./date";
export class Activity {
    name : string;
    description : string;
    ratings: number[] = []; 
    averageRating: number = 0; 
  startDate: ourDate;
  endDate: ourDate;
    constructor(
        name: string,
        description: string,
        startDate: ourDate,
        endDate: ourDate
      ) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
      }

    getDescription(): string {
        return this.description;
    }

    changeDescription(description: string): void {
        this.description = description;
    }

    addNewRating(newRating: number): void {
        this.ratings.push(newRating)
        let totalRatingScore = this.ratings.reduce((a,b) => a+b, 0)
        this.averageRating = totalRatingScore/this.ratings.length
    }

    getAverageRating(): number {
        return this.averageRating; //Should be undefined if the activity has not been rated. 
    }
}
