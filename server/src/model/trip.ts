import { Activity } from "./activity";
import { ourDate } from "./date";

export class Trip {
  id: string;
  destination?: string;
  startDate?: Date;
  endDate?: Date;
  hotel?: string;
  activities: Activity[];

  constructor(
    id: string,
    activities: Activity[],
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
  }

  removeActivity(activity: Activity) {
    var index = this.activities!.indexOf(activity);
    this.activities!.splice(index, 1);
  }

  addActivity(activity: Activity) {
    this.activities!.push(activity);
  }
}
