import { Activity } from "../model/activity";
import { IActivityService } from "./iactivityservice";
import { ourDate } from "../model/date";

export class ActivityService implements IActivityService {
  activities: Activity[] = [
    new Activity("Gå på museum", "Shit va mysigt!"),
    new Activity("Kayaking", "Watch out for the shark!"),
    new Activity("Bird Watching", "Meh..."),
    new Activity(
      "Cocktail party",
      "Ok place to go but the shark on the kayak tour is way cooler"
    ),
    new Activity("Liseberg", "Rollercoasters as far as the eye can see!"),
  ];

  constructor() {}

  getAllActivities(): Activity[] {
    return this.activities;
  }

  //to find aa specified activity
  findActivity(activityName: string) {
    for (let i: number = 0; i < this.activities.length; i++) {
      if (activityName == this.activities[i].name) {
        //console.log("found it!");
        return this.activities[i];
      }
    }
    throw new Error("No such activity");
  }

  async getDescription(name: string): Promise<string> {
    return this.findActivity(name).getDescription();
  }

  async changeDescription(name: string, description: string) {
    var activity = this.findActivity(name);
    activity.changeDescription(description);
    return true;
  }

  async addNewRating(name: string, rating: number) {
    var activity = this.findActivity(name);
    activity.addNewRating(rating);
    return true;
  }

  async getRating(name: string): Promise<number> {
    var activity = this.findActivity(name);
    return activity.getAverageRating();
  }
}
