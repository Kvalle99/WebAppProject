import { Destination } from "../model/destinations";

export interface IDestinationService {
    getDestinations(searchText: string) : Destination[];
}