import { Activity } from "./activity";

/** An interface for a stripped-down version of the trip, where you only need to know an id and a name.
 * This interface is made solely for get-request from App, where the backend responds with all the trips.
 * However, as the frontend doesn't need the entire trip, we only return its name and id.
 */
export interface simpleTrip {
  id: number;
  name: string;
}

// Represents a trip, which is a collection of information about a trip.
export class Trip {
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

  // Removes an activity from the trip based on the name of the activity.
  removeActivity(activity: string): void {
    var index: number = -1;

    // Since the front-end can only send the name of the activity, we have to find the index of the activity in the array
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

  // Returns an array of all the names of the activities in the trip, convient for the front-end
  getActivitiesByName(): string[] {
    var activityNames: string[] = [];

    this.activities.forEach(function (activity) {
      activityNames.push(activity.getName());
    });
    return activityNames;
  }

  // Changes the destination of the trip and also resets other info, since it is dependant on destination
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
