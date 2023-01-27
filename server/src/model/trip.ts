import { Activity } from "./activity";

export class Trip {
    destination : string;
    startDate : string;
    endDate : string;
    hotel : string;
    activities : Activity[];

    constructor(destination : string, startDate : string, endDate : string, hotel : string, activities : Activity[]) {
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.hotel = hotel;
        this.activities = activities;
    }
}