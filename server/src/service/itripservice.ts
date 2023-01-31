import { Activity } from "../model/activity";
import { ourDate } from "../model/date";

export interface ITripService {
    // Adds an activity to the trips activity list
    changeHotel(hotel : string) : Promise<boolean>;

    // Returns list of all activities planned
    getHotel() : Promise<string>;
    
    changeStartDate(newDate: ourDate) : Promise<boolean>;
    
    changeEndDate(newDate: ourDate) : Promise<boolean>;
    
    getActivities() : Promise<Activity[]>;
    
    addActivities(activity: Activity) : Promise<boolean>;
    
    removeActivities(activity: Activity) : Promise<boolean>;
}