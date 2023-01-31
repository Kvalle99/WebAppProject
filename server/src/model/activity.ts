import { ourDate } from "./date";
export class Activity {
  name : string;
  description : string;
  ratings: bigint[] = []; 
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

  addNewRating(newRating: bigint): void {
      this.ratings.push(newRating)
  }

  getAverageRating(): number {
    let averageRating = undefined;
    if(this.ratings.length !== 0){
      let totalRatingScore = this.ratings.reduce((a: bigint,b: bigint) => a+b, BigInt(0))
      averageRating = Number(totalRatingScore)/this.ratings.length
    }       
    return averageRating ||=0; //If averageRating is undefined, set it to 0
  }
}
