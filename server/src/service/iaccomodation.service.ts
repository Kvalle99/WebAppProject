import { Accomodation } from "../model/accomodation";

export interface IAccomodationService {
    getAccomodations(destination: string, searchText: string) : Accomodation[];
    
    generateID() : number;
    
    isExists(id: number): boolean;
}