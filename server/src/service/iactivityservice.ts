export interface IActivityService {
  // Changes the description of an activity
  changeDescription(name: string, description: string, destination: string): Promise<boolean>;

  // Returns the description of an activity
  getDescription(name: string, destination: string): Promise<string>;

  addNewRating(name: string, rating: number, destination: string): Promise<boolean>;

  getRating(name: string, destination: string): Promise<number>;
}
