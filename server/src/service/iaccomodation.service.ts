import { Accomodation } from "../model/accomodation";

// Service for calls concerning accomodations
export interface IAccomodationService {
  // Returns all accomodations in destination matching search string
  getAccomodations(destination: string, searchText: string): Accomodation[];
}
