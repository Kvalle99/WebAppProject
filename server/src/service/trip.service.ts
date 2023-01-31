import { Activity } from "../model/activity";
import { ourDate } from "../model/date";
import { Trip } from "../model/trip";
import { ITripService } from "./itripservice";

export class TripService implements ITripService {
  //will be collected from database later
  trip = new Trip(
    "6845198231",
    "new york",
    new ourDate(BigInt(2023), BigInt(11), BigInt(11)),
    new ourDate(BigInt(2023), BigInt(11), BigInt(19)),
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

  async changeStartDate(newDate: ourDate) {
    this.trip.startDate = newDate;
  }

  async changeEndDate(newDate: ourDate) {
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
