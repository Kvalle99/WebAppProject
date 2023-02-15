import { Activity } from "../model/activity";
import { ourDate } from "../model/date";

export interface ITripService {
  // Adds an activity to the trips activity list
  changeAccomodation(
    userId: number,
    tripId: string,
    hotel: string
  ): Promise<boolean>;

  // Returns list of all activities planned

  changeDates(
    userId: number,
    tripId: string,
    startDate: Date,
    endDate: Date
  ): Promise<boolean>;

  changeEndDate(id: string, newDate: Date): Promise<boolean>;

  addActivities(id: string, ativity: Activity): Promise<boolean>;

  removeActivities(id: string, activity: Activity): Promise<boolean>;
}
