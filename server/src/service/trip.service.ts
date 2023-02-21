import { Activity } from "../model/activity";
import { Trip } from "../model/trip";
import { ITripService } from "./itripservice";

export class TripService implements ITripService {
  //will be collected from database later

  tripList = [
    new Trip(
      "6845198231",
      [new Activity("Liseberg", "fuck")],
      11,
      "New York",

      new Date(2023, 11, 11),
      new Date(2023, 11, 19),
      "testHotel"
    ),
    new Trip(
      "6845191",
      [new Activity("Kayaking", "fuck")],
      11,
      "Chiang Mai",
      new Date(2023, 10, 24),
      new Date(2023, 11, 5),
      "kvalles place"
    ),
    new Trip(
      "11111111",
      [new Activity("Din mamma", "fuck")],
      11,
      "Paris",
      new Date(2024, 1, 7),
      new Date(2024, 2, 5),
      "OuiOui hotel"
    ),
  ];

  constructor() {}

  generateID() {
    return (Math.random() * 100000).toString();
  }
  findTrip(myId: string) {
    for (let i: number = 0; i < this.tripList.length; i++) {
      //console.log("in list: ", this.tripList[i].id);
      //console.log("myId: ", myId);
      if (myId == this.tripList[i].id) {
        //console.log("found it!");
        return this.tripList[i];
      }
    }
    throw new Error("No such trip");
  }

  findAllTrips(userId: number) {
    var toReturn: string[] = [];
    for (let i: number = 0; i < this.tripList.length; i++) {
      if (userId == this.tripList[i].user) {
        toReturn.push(this.tripList[i].id);
      }
    }
    return toReturn;
  }

  async getMyTrips(myId: number) {
    return this.findAllTrips(myId);
  }

  async getMyTrip(myId: number, tripId: string) {
    const trip = this.findTrip(tripId);
    if (trip.user == myId) {
      return trip;
    }
    return;
  }

  async changeDestination(userId: number, tripId: string, destination: string) {
    var myTrip: Trip | null = this.findTrip(tripId);
    if (myTrip && myTrip.user == userId) {
      myTrip.destination = destination;
    }
    return true;
  }
  async getAccomodation(id: string) {
    return this.findTrip(id).hotel;
  }

  async changeAccomodation(
    userId: number,
    tripId: string,
    accomodation: string
  ) {
    var myTrip: Trip | null = this.findTrip(tripId);
    if (myTrip && myTrip.user == userId) {
      myTrip.hotel = accomodation;
    }
    return true;
  }

  async changeDates(
    userId: number,
    tripId: string,
    startDate: Date,
    endDate: Date
  ) {
    var myTrip: Trip | null = this.findTrip(tripId);
    if (myTrip && myTrip.user == userId) {
      myTrip.startDate = startDate;
      myTrip.endDate = endDate;
      return true;
    }
    return false;
  }

  async changeEndDate(myId: string, newDate: Date) {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      myTrip.endDate = newDate;
      return true;
    }
    return false;
  }

  async handleActivity(activity : string, id :string) {

    var activitySelected : Activity | null = null;

    var activities : Activity[] = await this.getActivities(id);

    activities.forEach(function (act) {
      console.log(act.getName())
      if (act.getName() === activity) {
        activitySelected = act;
      }
    })

    if (activitySelected != null) {
      this.removeActivities(id, activitySelected)
      console.log("activity was prev selected ")
    }
    if (activitySelected = null) {
      // TODO: add activity
    }
  }

  async addActivities(myId: string, activity: Activity) {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      myTrip.addActivity(activity);
      return true;
    }
    return false;
  }

  async removeActivities(myId: string, activity: Activity) {
    var myTrip: Trip | null = this.findTrip(myId);
    if (myTrip) {
      myTrip.removeActivity(activity);
      return true;
    }
    return false;
  }

  async getActivities(myId : string) : Promise<Activity[]> {
    var myTrip : Trip | null = this.findTrip(myId);
    if (myTrip) {
      return myTrip.getActivities();
    }

    return [];
  }

  async getActivitiesByName(myId : string) : Promise<string[]> {
    var myTrip : Trip | null = this.findTrip(myId);
    if (myTrip) {
      return myTrip.getActivitiesByName();
    }

    return [];
  }
}
