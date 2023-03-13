import { Activity } from "../model/activity";
import { simpleTrip, Trip } from "../model/trip";
import { ActivityService } from "./activity.service";
import { ITripService } from "./itrip.service";
import { generateID } from "./generator.service";

export class TripService implements ITripService {
  // No database = service needs a list of trips
  tripList: Trip[] = [];

  // Creates empty trip for user with userId called tripName
  async createTrip(userId: number, tripName: string): Promise<Trip> {
    let newTrip: Trip = new Trip(
      generateID(this.tripList.map((trip) => trip.getId())),
      tripName,
      [],
      userId,
      undefined,
      undefined,
      undefined,
      undefined
    );
    this.tripList.push(newTrip);
    return newTrip;
  }

  // Internal method, returns trip with id myId
  private findTrip(myId: number): Trip {
    for (let i: number = 0; i < this.tripList.length; i++) {
      if (myId == this.tripList[i].getId()) {
        return this.tripList[i];
      }
    }
    throw new Error("No such trip");
  }

  // Interal method, returns all trips for user with userId
  private findAllTrips(userId: number): simpleTrip[] {
    let toReturn: Array<simpleTrip> = [];

    for (let i: number = 0; i < this.tripList.length; i++) {
      if (userId == this.tripList[i].getUserId()) {
        toReturn.push({
          id: this.tripList[i].getId(),
          name: this.tripList[i].getName(),
        });
      }
    }

    return toReturn;
  }

  // Returns all trips for user with userId
  async getMyTrips(myId: number): Promise<Array<simpleTrip>> {
    return this.findAllTrips(myId);
  }

  // Returns specific trip with tripId for user with userId
  async getMyTrip(myId: number, tripId: number): Promise<Trip> {
    const trip = this.findTrip(tripId);
    if (trip.getUserId() == myId) {
      return trip;
    } else {
      throw new Error("Error getting trip");
    }
  }

  // Changes destination of trip with tripId for user with userId to destination
  // Returns true when done
  async changeDestination(
    userId: number,
    tripId: number,
    destination: string
  ): Promise<boolean> {
    var myTrip: Trip | null = this.findTrip(tripId);
    if (myTrip && myTrip.getUserId() == userId) {
      myTrip.updateDestination(destination);
    }
    return true;
  }


  // Returns name of accommodation for trip with id
  async getAccomodation(id: number): Promise<string> {
    return this.findTrip(id).getHotel();
  }

  // Changes accommodation of trip with tripId for user with userId to accomodation in city
  // Returns true when done
  async changeAccomodation(
    userId: number,
    tripId: number,
    accomodation: string,
    city: string
  ): Promise<boolean> {
    var myTrip: Trip | null = this.findTrip(tripId);
    if (
      myTrip &&
      myTrip.getUserId() == userId &&
      myTrip.getDestination() == city
    ) {
      myTrip.setHotel(accomodation);
    }
    return true;
  }

  // Changes dates of trip with tripId for user with userId to startDate and endDate
  async changeDates(
    userId: number,
    tripId: number,
    startDate: Date,
    endDate: Date
  ): Promise<boolean> {
    var myTrip: Trip | null = this.findTrip(tripId);
    if (myTrip && myTrip.getUserId() == userId) {
      myTrip.updateDates(startDate, endDate);
      return true;
    }
    return false;
  }

  // Adds activity if it is not already in the trip, else removes it
  async handleActivity(
    activity: string,
    destination: string,
    id: number
  ): Promise<void> {
    var activitySelected: Activity | null = null;
    var actServ = new ActivityService();

    var activities: Activity[] = await this.getActivities(id);

    // Since the activity is just a string, we need to find the activity object. Not a clean solution, but it works

    // If the activity is already in the trip, find it
    activities.forEach(function (act) {
      if (act.getName() === activity) {
        activitySelected = actServ.findActivity(activity, destination);
      }
    });

    // If the activity was found, remove it, else add it
    if (activitySelected) {
      this.removeActivity(id, (activitySelected as Activity).getName());
    } else {
      activitySelected = actServ.findActivity(activity, destination);
      this.addActivity(id, activitySelected);
    }
  }

  // Adds activity to trip with id, returns true if successful
  private async addActivity(myId: number, activity: Activity): Promise<boolean> {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      myTrip.addActivity(activity);
      return true;
    }
    return false;
  }

  // Removes activity from trip with id, returns true if successful
  private async removeActivity(myId: number, activity: string): Promise<boolean> {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      myTrip.removeActivity(activity);
      return true;
    }
    return false;
  }

  // Returns all activities for trip with id myId
  async getActivities(myId: number): Promise<Activity[]> {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      return myTrip.getActivities();
    }

    return [];
  }

  // Returns names of all activities for trip with id myId
  async getActivitiesByName(myId: number): Promise<string[]> {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      return myTrip.getActivitiesByName();
    }
    return [];
  }
}
