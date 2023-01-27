import { Activity } from "../model/activity";

export interface ITripService {
    // Adds an activity to the trips activity list
    changeHotel(hotel : string) : Promise<void>;

    // Returns list of all activities planned
    getHotel() : Promise<string>;
}