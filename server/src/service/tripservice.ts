import { Activity } from "../model/activity";
import { Trip } from "../model/trip";
import { ITripService } from "./itripservice";

export class TripService implements ITripService {
    trip! : Trip;

    constructor (){
        this.trip = new Trip('new york', 'startdate', 'enddate', 'hotel', [])
    }

    async getHotel(): Promise<string> {
        return this.trip.hotel;
    }

    async changeHotel(hotel: string) {
        this.trip.hotel=hotel;
    }


}