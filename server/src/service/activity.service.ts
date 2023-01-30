import { Activity } from "../model/activity";
import { IActivityService } from "./iactivityservice";

export class ActivityService implements IActivityService {
  activity: Activity = new Activity("Gå på museum", "Shit va mysigt!")

  constructor() {}

  async getDescription(): Promise<string> {
    return this.activity.description;
  }

  async changeDescription(description: string) {
    this.activity.description = description;
  }
}
