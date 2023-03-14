import { Activity } from "../model/activity";
import { simpleTrip, Trip } from "../model/trip";

// Service for calls concerning trips
export interface ITripService {
  // Creates a new trip for user with userId called tripName
  createTrip(userId: number, tripName: string): Promise<Trip>;

  // Returns all trips for user with userId
  getMyTrips(myId: number): Promise<Array<simpleTrip>>;

  // Returns specific trip with tripId for user with userId
  getMyTrip(myId: number, tripId: number): Promise<Trip>;

  // Changes destination of trip with tripId for user with userId to destination
  // Returns true if successful
  changeDestination(
    userId: number,
    tripId: number,
    destination: string
  ): Promise<boolean>;

  // Returns the name of the accomodation for trip with id id
  getAccomodation(id: number): Promise<string>;

  /* Changes accomodation of trip with tripId for user with userId to accomodation
  * City is needed to enable same name for hotels in different cities
  returns true if successful
  */
  changeAccomodation(
    userId: number,
    tripId: number,
    accomodation: string,
    city: string
  ): Promise<boolean>;

  // Changes start date of trip with tripId for user with userId to startDate and endDate
  // Returns true if successful
  changeDates(
    userId: number,
    tripId: number,
    startDate: Date,
    endDate: Date
  ): Promise<boolean>;

  /*
  if activity is not already in trip:
  Adds activity with name @param activity in city @param destinaion to trip with id @param id
  Else:
  Removes said activity from trip
  */
  handleActivity(
    activity: string,
    destination: string,
    id: number
  ): Promise<void>;

  // Returns all activities in trip with id @param id
  getActivities(myId: number): Promise<Activity[]>;

  // Returns name of all activites in trip with id @param id, convienient for frontend
  getActivitiesByName(myId: number): Promise<string[]>;
}
