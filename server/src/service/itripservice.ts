import { Activity } from "../model/activity";

export interface ITripService {
  // Adds an activity to the trips activity list
  changeAccomodation(
    userId: number,
    tripId: number,
    hotel: string,
    accomodationCity: string
  ): Promise<boolean>;

  // Returns list of all activities planned

  changeDates(
    userId: number,
    tripId: number,
    startDate: Date,
    endDate: Date
  ): Promise<boolean>;

  /*   changeEndDate(id: number, newDate: Date): Promise<boolean>;
   */
  addActivities(id: number, ativity: Activity): Promise<boolean>;

  removeActivities(id: number, activity: string): Promise<boolean>;
}
