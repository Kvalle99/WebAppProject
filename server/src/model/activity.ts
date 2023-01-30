export class Activity {
    name : string;
    description : string;
    ratings: number[] = []; 
    averageRating: number = 0; //Should be undefined if the activity has not been rated. 

    constructor(name : string, description : string) {
        this.name = name;
        this.description = description;
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