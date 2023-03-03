import { Activity } from "../model/activity";
import { Trip } from "../model/trip";

export interface ITripService {
  generateID() : number;

  isExists(id: number): boolean;

  createTrip(userId: number, tripName: string): Promise<Trip>;

  findTrip(myId: number) : Trip;

  findAllTrips(userId: number) : number[];

  getMyTrips(myId: number) : Promise<number[]>;

  getMyTrip(myId: number, tripId: number) : Promise<Trip>;

  changeDestination(userId: number, tripId: number, destination: string) : Promise<boolean>;

  getAccomodation(id: number) : Promise<string>;

  changeAccomodation(
    userId: number,
    tripId: number,
    accomodation: string,
    city: string
  ) : Promise<boolean>;

  changeDates(
    userId: number,
    tripId: number,
    startDate: Date,
    endDate: Date
  ) : Promise<boolean>;

  handleActivity(activity: string, destination: string, id: number) : Promise<void>;

  addActivities(myId: number, activity: Activity) : Promise<boolean>;

  removeActivities(myId: number, activity: string) : Promise<boolean>;

  getActivities(myId: number): Promise<Activity[]>;

  getActivitiesByName(myId: number): Promise<string[]>;
}
