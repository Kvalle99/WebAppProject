export interface IActivityService {
    // Changes the description of an activity
    changeDescription(description : string) : Promise<void>;

    // Returns the description of an activity
    getDescription() : Promise<string>;

    addNewRating(newRating: bigint): Promise<void>;
}