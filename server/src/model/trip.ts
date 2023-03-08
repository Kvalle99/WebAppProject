import { Activity } from "./activity";

/** An interface for a stripped-down version of the trip, where you only need to know an id and a name.
 * This interface is made solely for get-request from App, where the backend responds with all the
 *
 */
export interface simpleTrip {
  id: number;
  name: string;
}

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

  removeActivity(activity: string): void {
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

    this.activities.splice(index, 1);
  }

  addActivity(activity: Activity): void {
    this.activities.push(activity);
  }

  getActivitiesByName(): string[] {
    var activityNames: string[] = [];

    this.activities.forEach(function (activity) {
      activityNames.push(activity.getName());
    });
    return activityNames;
  }

  updateDestination(destination: string): void {
    this.destination = destination;
    this.hotel = undefined;
    this.startDate = undefined;
    this.endDate = undefined;
    this.activities = [];
  }

  updateDates(startDate: Date, endDate: Date): void {
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

  setHotel(hotel: string): void {
    this.hotel = hotel;
  }

  getName(): string {
    return this.name;
  }
}
