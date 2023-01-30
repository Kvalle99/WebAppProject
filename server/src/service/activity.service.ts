import { Activity } from "../model/activity";
import { IActivityService } from "./iactivityservice";
import { Date } from "../model/date";

export class ActivityService implements IActivityService {
    startDate = new Date(BigInt(2023), BigInt(12), BigInt(12))
    endDate = new Date(BigInt(2023), BigInt(12), BigInt(12))
  activity: Activity = new Activity("Gå på museum", "Shit va mysigt!", this.startDate, this.endDate)

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
