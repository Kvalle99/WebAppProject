import { Activity } from "../model/activity";
import { IActivityService } from "./iactivityservice";

export class ActivityService implements IActivityService {
  activity: Activity = new Activity("Gå på museum", "Shit va mysigt!")

  constructor() {}

  async getDescription(): Promise<string> {
    return this.activity.getDescription();
  }

  async changeDescription(description: string) {
    this.activity.changeDescription(description);
  }

  async addNewRating(rating: number) {
    this.activity.addNewRating(rating);
  }

  async getRating(): Promise<number> {
    return this.activity.getAverageRating();
  }
}
