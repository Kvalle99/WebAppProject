import { Activity } from "../model/activity";
import { IActivityService } from "./iactivityservice";

export class ActivityService implements IActivityService {
  activities: Activity[] = [
    new Activity("Gå på museum", "Shit va mysigt!", "Madrid"),
    new Activity("Tjurfäktning", "Etiskt tveksamt", "Madrid"),
    new Activity("Kayaking", "Watch out for the shark!", "Stockholm"),
    new Activity("Bird Watching", "Meh...", "Stockholm"),
    new Activity(
      "Cocktail party",
      "Ok place to go but the shark on the kayak tour is way cooler",
      "Stockholm"
    ),
    new Activity("Liseberg", "Rollercoasters as far as the eye can see!", "Gothenburg"),
    new Activity("Din mamma", "I did this last night", "Gothenburg"),
    new Activity("La Louvre", "Mona lisa is overrated", "Paris"),
    new Activity("Eiffel Tower", "Pretty tall", "Paris"),
    new Activity("Eat croissant", "Yum!", "Paris"),
    new Activity("Tourist bus", "See a lot!", "Paris"),
    new Activity("Statue of Liberty", "Murica!", "New York"),
    new Activity("Pizza", "Italian American style", "New York"),
    new Activity("MOMA", "Cool modern art", "New York"),
    new Activity("Grand Central Park", "It is a big forest in the city", "New York"),
    new Activity("Long Island", "Great ice teas!", "New York"),
    new Activity("Eat fresh pepper", "It's very unique", "Chiang Mai"),
    new Activity("Jungle trek", "Build character", "Chiang Mai")

  ];

  constructor() {}

  getAllActivities(dest : string): Activity[] {
    var acts : Activity[] = []

    for (let act of this.activities) {
      if (act.getDestination() == dest) {
        acts.push(act)
      }
    }

    return acts;
  }

  //to find aa specified activity
  findActivity(activityName: string, inDestination : string) {
    for (let i: number = 0; i < this.activities.length; i++) {
      if (activityName == this.activities[i].name && inDestination == this.activities[i].inDestination) {
        //console.log("found it!");
        return this.activities[i];
      }
    }
    throw new Error("No such activity");
  }

  async getDescription(name: string, destination: string): Promise<string> {
    return this.findActivity(name, destination).getDescription();
  }

  async changeDescription(name: string, description: string, destination: string) {
    var activity = this.findActivity(name, destination);
    activity.changeDescription(description);
    return true;
  }

  async addNewRating(name: string, rating: number, destination: string) {
    var activity = this.findActivity(name, destination);
    activity.addNewRating(rating);
    return true;
  }

  async getRating(name: string, destination: string): Promise<number> {
    var activity = this.findActivity(name, destination);
    return activity.getAverageRating();
  }
}
