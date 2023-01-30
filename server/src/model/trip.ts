import { Activity } from "./activity";
import { Date } from "./Date";

export class Trip {
  destination: string;
  startDate: Date;
  endDate: Date;
  hotel: string;
  activities: Activity[];

  constructor(
    destination: string,
    startDate: Date,
    endDate: Date,
    hotel: string,
    activities: Activity[]
  ) {
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hotel = hotel;
    this.activities = activities;
  }

  removeActivity(activity: Activity) {
    var index = this.activities.indexOf(activity);
    this.activities.splice(index, 1);
  }

  addActivity(activity: Activity) {
    this.activities.push(activity);
  }
}
