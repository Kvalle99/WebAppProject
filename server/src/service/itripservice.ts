import { Activity } from "../model/activity";
import { ourDate } from "../model/date";

export interface ITripService {
  // Adds an activity to the trips activity list
  changeHotel(id: string, hotel: string): Promise<boolean>;

  // Returns list of all activities planned
  getHotel(): Promise<string>;

  changeDates(id: string, startDate: Date, endDate: Date): Promise<boolean>;

  changeEndDate(id: string, newDate: Date): Promise<boolean>;

  getActivities(id: string): Promise<Activity[]>;

  addActivities(aid: string, ctivity: Activity): Promise<boolean>;

  removeActivities(id: string, activity: Activity): Promise<boolean>;
}
