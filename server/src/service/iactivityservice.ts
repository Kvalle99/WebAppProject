export interface IActivityService {
    // Changes the description of an activity
    changeDescription(description : string) : Promise<boolean>;

    // Returns the description of an activity
    getDescription() : Promise<string>;

    
    addNewRating(rating: bigint) : Promise<boolean>;
    
    getRating(): Promise<number>;

}