import { Activity } from "../model/activity";
import { Date } from "../model/Date";
import { Trip } from "../model/trip";
import { ITripService } from "./itripservice";

export class TripService implements ITripService {
  //will be collected from database later
  trip = new Trip(
    "new york",
    new Date(BigInt(2023), BigInt(11), BigInt(11)),
    new Date(BigInt(2023), BigInt(11), BigInt(19)),
    "hotel",
    []
  );

  constructor() {}

  async getHotel(): Promise<string> {
    return this.trip.hotel;
  }

  async changeHotel(hotel: string) {
    this.trip.hotel = hotel;
  }

  async changeStartDate(newDate: Date) {
    this.trip.startDate = newDate;
  }

  async changeEndDate(newDate: Date) {
    this.trip.endDate = newDate;
  }

  async getActivities(): Promise<Activity[]> {
    return this.trip.activities;
  }

  async addActivities(activity: Activity) {
    this.trip.addActivity(activity);
  }

  async removeActivities(activity: Activity) {
    this.trip.removeActivity(activity);
  }
}
