import { Activity } from "./activity";
import { ourDate } from "./date";

export class Trip {
  //TODO: replace hotel with Accomodation object, and destianation with Destinaiton-object
  id: string;
  destination?: string;
  startDate?: Date;
  endDate?: Date;
  hotel?: string;
  activities: Activity[];
  user: number;

  constructor(
    id: string,
    activities: Activity[],
    user: number,
    destination?: string,
    startDate?: Date,
    endDate?: Date,
    hotel?: string
  ) {
    this.id = id;
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hotel = hotel;
    this.activities = activities;
    this.user = user;
  }

  removeActivity(activity: Activity) {
    var index = this.activities!.indexOf(activity);
    this.activities!.splice(index, 1);
  }

  addActivity(activity: Activity) {
    this.activities!.push(activity);
  }

  getActivitiesByName() : string[] {
    var activityNames : string[] = [];

    this.activities.forEach(function(activity) {
      activityNames.push(activity.getName())
    })
    return activityNames;
  }

  getActivities() : Activity[] {
    return this.activities;
  }
}
