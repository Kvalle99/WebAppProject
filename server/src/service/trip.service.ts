import { Activity } from "../model/activity";
import { simpleTrip, Trip } from "../model/trip";
import { ActivityService } from "./activity.service";
import { ITripService } from "./itripservice";

export class TripService implements ITripService {
  tripList: Trip[] = [
    new Trip(
      6845198231,
      "New York-resa",
      [],
      11,
      "New York",
      new Date(2023, 11, 11),
      new Date(2023, 11, 19)
    ),
    new Trip(
      6845191,
      "Bort till värmen",
      [],
      11,
      "Chiang Mai",
      new Date(2023, 10, 24),
      new Date(2023, 11, 5)
    ),
    new Trip(
      11111111,
      "Un Voyage aux baguettes et aux escargots",
      [],
      11,
      "Paris",
      new Date(2024, 1, 7),
      new Date(2024, 2, 5)
    ),
  ];

  generateID(): number {
    const id = Math.floor(Math.random() * 100000);
    if (this.isExists(id)) {
      this.generateID();
    }
    return id;
  }

  isExists(id: number): boolean {
    let res: boolean = false;
    var result = this.tripList.find((trip) => {
      return trip.getId() === id;
    });
    result === undefined ? (res = false) : (res = true);
    return res;
  }

  async createTrip(userId: number, tripName: string): Promise<Trip> {
    let newTrip: Trip = new Trip(
      this.generateID(),
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

  findTrip(myId: number): Trip {
    for (let i: number = 0; i < this.tripList.length; i++) {
      if (myId == this.tripList[i].getId()) {
        return this.tripList[i];
      }
    }
    throw new Error("No such trip");
  }

  findAllTrips(userId: number): simpleTrip[] {
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

  async getMyTrips(myId: number): Promise<Array<simpleTrip>> {
    return this.findAllTrips(myId);
  }

  async getMyTrip(myId: number, tripId: number): Promise<Trip> {
    const trip = this.findTrip(tripId);
    if (trip.getUserId() == myId) {
      return trip;
    } else {
      throw new Error("Error getting trip");
    }
  }

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

  async getAccomodation(id: number): Promise<string> {
    return this.findTrip(id).getHotel();
  }

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

  async handleActivity(
    activity: string,
    destination: string,
    id: number
  ): Promise<void> {
    var activitySelected: Activity | null = null;
    var actServ = new ActivityService();

    var activities: Activity[] = await this.getActivities(id);

    activities.forEach(function (act) {
      if (act.getName() === activity) {
        activitySelected = actServ.findActivity(activity, destination);
      }
    });

    if (activitySelected) {
      this.removeActivities(id, (activitySelected as Activity).getName());
    } else {
      activitySelected = actServ.findActivity(activity, destination);
      this.addActivities(id, activitySelected);
    }
  }

  async addActivities(myId: number, activity: Activity): Promise<boolean> {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      myTrip.addActivity(activity);
      return true;
    }
    return false;
  }

  async removeActivities(myId: number, activity: string): Promise<boolean> {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      myTrip.removeActivity(activity);
      return true;
    }
    return false;
  }

  async getActivities(myId: number): Promise<Activity[]> {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      return myTrip.getActivities();
    }

    return [];
  }

  async getActivitiesByName(myId: number): Promise<string[]> {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      return myTrip.getActivitiesByName();
    }
    return [];
  }
}
