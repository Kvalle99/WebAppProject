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
    new Activity(
      "Liseberg",
      "Rollercoasters as far as the eye can see!",
      "Gothenburg"
    ),
    new Activity("Din mamma", "I did this last night", "Gothenburg"),
    new Activity("La Louvre", "Mona lisa is overrated", "Paris"),
    new Activity("Eiffel Tower", "Pretty tall", "Paris"),
    new Activity("Eat croissant", "Yum!", "Paris"),
    new Activity("Tourist bus", "See a lot!", "Paris"),
    new Activity("Statue of Liberty", "Murica!", "New York"),
    new Activity("Pizza", "Italian American style", "New York"),
    new Activity("MOMA", "Cool modern art", "New York"),
    new Activity(
      "Grand Central Park",
      "It is a big forest in the city",
      "New York"
    ),
    new Activity("Long Island", "Great ice teas!", "New York"),
    new Activity("Eat fresh pepper", "It's very unique", "Chiang Mai"),
    new Activity("Jungle trek", "Build character", "Chiang Mai"),
  ];

  constructor() {}

  getAllActivities(dest: string, searchText: string): Activity[] {
    let acts = this.activities.filter((activity: Activity) => {
      const cityMatch =
        activity.getDestination().toLowerCase() == dest.toLowerCase() ||
        dest === "";
      const searchMatch =
        activity
          .getDestination()
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        activity.getName().toLowerCase().includes(searchText.toLowerCase());
      return cityMatch && searchMatch;
    });
    return acts;
  }

  //to find aa specified activity
  findActivity(activityName: string, inDestination: string) : Activity {
    for (let i: number = 0; i < this.activities.length; i++) {
      if (
        activityName == this.activities[i].getName() &&
        inDestination == this.activities[i].getDestination()
      ) {
        //console.log("found it!");
        return this.activities[i];
      }
    }
    throw new Error("No such activity");
  }

  async getDescription(name: string, destination: string): Promise<string> {
    return this.findActivity(name, destination).getDescription();
  }

  async changeDescription(
    name: string,
    description: string,
    destination: string
  ) : Promise<boolean> {
    var activity = this.findActivity(name, destination);
    activity.changeDescription(description);
    return true;
  }
}
