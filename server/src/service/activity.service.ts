import { Activity } from "../model/activity";
import { IActivityService } from "./iactivity.service";
import { searchArrayOnDestinationAndString } from "./searching.service";

// Service for frontend calls concering activities
export class ActivityService implements IActivityService {
  // No database = hardcoded activities
  activities: Activity[] = [
    new Activity(0, "Visist a museum", "Everyone needs culture!", "Madrid"),
    new Activity(1, "Bullfighting", "Morally questionable", "Madrid"),
    new Activity(2, "Kayaking", "Watch out for the shark!", "Stockholm"),
    new Activity(3, "Bird Watching", "Meh...", "Stockholm"),
    new Activity(
      4,
      "Cocktail party",
      "Ok place to go but the shark on the kayak tour is way cooler",
      "Stockholm"
    ),
    new Activity(
      5,
      "Liseberg",
      "Rollercoasters as far as the eye can see!",
      "Gothenburg"
    ),
    new Activity(6, "Sjöfartsmuseet", "Newly re-opened! Amazing!", "Gothenburg"),
    new Activity(7, "La Louvre", "Mona lisa is overrated", "Paris"),
    new Activity(8, "Eiffel Tower", "Pretty tall", "Paris"),
    new Activity(9, "Eat croissant", "Yum!", "Paris"),
    new Activity(10, "Tourist bus", "See a lot!", "Paris"),
    new Activity(11, "Statue of Liberty", "Murica!", "New York"),
    new Activity(12, "Pizza", "Italian American style", "New York"),
    new Activity(13, "MOMA", "Cool modern art", "New York"),
    new Activity(
      14,
      "Grand Central Park",
      "It is a big forest in the city",
      "New York"
    ),
    new Activity(15, "Long Island", "Great ice teas!", "New York"),
    new Activity(16, "Eat fresh pepper", "It's very unique", "Chiang Mai"),
    new Activity(11117, "Jungle trek", "Build character", "Chiang Mai"),
  ];

  // Uses search service to find all activities in destination matching search string
  getAllActivities(dest: string, searchText: string): Activity[] {
    return searchArrayOnDestinationAndString(
      this.activities,
      (dest ||= ""),
      searchText
    );
  }

  /*
   Finds a specific activity in a destination based on activity name
   Used by backend since frontend only sends activity name
   */
  findActivity(activityName: string, inDestination: string): Activity {
    for (let i: number = 0; i < this.activities.length; i++) {
      if (
        activityName == this.activities[i].getName() &&
        inDestination == this.activities[i].getCity()
      ) {
        return this.activities[i];
      }
    }
    throw new Error("No such activity");
  }

  async getDescription(name: string, destination: string): Promise<string> {
    return this.findActivity(name, destination).getDescription();
  }
}
