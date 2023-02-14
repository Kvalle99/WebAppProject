import { Activity } from "../model/activity";
import { Trip } from "../model/trip";
import { ITripService } from "./itripservice";

export class TripService implements ITripService {
  //will be collected from database later
 

  tripList = [
    new Trip(
      "6845198231",
      [],
      "new york",
      new Date(2023, 11, 11),
      new Date(2023, 11, 19),
      "testHotel"
    ),
    new Trip(
      "6845191",
      [],
      "Chiang Mai",
      new Date(2023, 10, 24),
      new Date(2023, 11, 5),
      "kvalles place"
    ),
    new Trip(
      "11111111",
      [],
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

  async getMyTrip(myId: string) {
    return this.findTrip(myId);
  }


  async changeHotel(id: string, hotel: string) {
    var myTrip: Trip | null = this.findTrip(id);
    if (myTrip) {
      myTrip.hotel = hotel;
    }
    return true;
  }

  async changeDates(myId: string, startDate: Date, endDate: Date) {
    var myTrip: Trip | null = this.findTrip(myId);
    console.log("new dates:");
    console.log(startDate);
    console.log(endDate);
    if (myTrip) {
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
}
