import { Destination } from "../model/destinations";

// Service for calls concerning destinations
export interface IDestinationService {
    // Returns all destinations matching search string
    getDestinations(searchText: string) : Destination[];
}