import { Activity } from "./activity";

export class Trip {
  //TODO: replace hotel with Accomodation object, and destianation with Destinaiton-object
  private id: number;
  private name: string;
  private destination?: string;
  private startDate?: Date;
  private endDate?: Date;
  private hotel?: string;
  private activities: Activity[];
  private userId: number;

  constructor(
    id: number,
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
    this.userId = user;
  }

  removeActivity(activity: string) {
    console.log("act length before remove: " + this.activities.length);

    console.log("trip model class removing " + activity);

    var index: number = -1;

    //ta bort baserat på namn
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i].getName() == activity) {
        index = i;
      }
    }

    if (index === -1) {
      return;
    }

    console.log("removing at index " + index);
    this.activities.splice(index, 1);

    console.log("act length after remove: " + this.activities.length);
  }

  addActivity(activity: Activity) {
    console.log("act length before add: " + this.activities.length);
    this.activities.push(activity);
    console.log("act length after add: " + this.activities.length);
  }

  getActivitiesByName(): string[] {
    var activityNames: string[] = [];

    this.activities.forEach(function (activity) {
      activityNames.push(activity.getName());
    });
    return activityNames;
  }

  updateDestination(destination: string) {
    this.destination = destination;
    this.hotel = undefined;
    this.startDate = undefined;
    this.endDate = undefined;
    this.activities = [];
  }

  updateDates(startDate: Date, endDate: Date) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  getActivities(): Activity[] {
    return this.activities;
  }

  getId(): number {
    return this.id;
  }

  getUserId(): number {
    return this.userId;
  }

  getHotel(): string {
    return (this.hotel ??= "");
  }

  getDestination(): string {
    return (this.destination ??= "");
  }

  setHotel(hotel: string) {
    this.hotel = hotel;
  }
}
