export interface IActivityService {
  // Changes the description of an activity
  changeDescription(name: string, description: string): Promise<boolean>;

  // Returns the description of an activity
  getDescription(name: string): Promise<string>;

  addNewRating(name: string, rating: number): Promise<boolean>;

  getRating(name: string): Promise<number>;
}
