import { Activity } from "./activity";
import { ourDate } from "./date";

export class Trip {
  //TODO: replace hotel with Accomodation object, and destianation with Destinaiton-object
  id: string;
  name: string;
  destination?: string;
  startDate?: Date;
  endDate?: Date;
  hotel?: string;
  activities: Activity[];
  user: number;

  constructor(
    id: string,
    name: string,
    activities: Activity[],
    user: number,
    destination?: string,
    startDate?: Date,
    endDate?: Date,
    hotel?: string
  ) {
    this.id = id;
    this.name = name;
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hotel = hotel;
    this.activities = activities;
    this.user = user;
  }

  

  removeActivity(activity: string) {
    console.log("act length before remove: " + this.activities.length)

    console.log("trip model class removing " + activity)

    var index : number = -1;

    //ta bort baserat på namn
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i].getName() == activity) {
        index = i;
      }
    }

    if (index === -1) {
      return;
    }

    console.log("removing at index " + index)
    this.activities.splice(index, 1);

    console.log("act length after remove: " + this.activities.length)
  }

  addActivity(activity: Activity) {
    console.log("act length before add: " + this.activities.length)
    this.activities.push(activity);
    console.log("act length after add: " + this.activities.length)
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
