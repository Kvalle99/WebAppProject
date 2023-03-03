import express, { Request, Response } from "express";
import { Destination } from "../model/destinations";
import { DestinationService } from "../service/destination.service";
import { IDestinationService } from "../service/idestination.service";

const destinationService : IDestinationService = new DestinationService();
export const DestinationRouter = express.Router();

DestinationRouter.get(
  "/getDestinations",
  async (req: Request<{}, {}, {}>, res: Response<Destination[]>) => {
    try {
      let searchText: any = req.query.searchText;
      const destinations = await destinationService.getDestinations(searchText);
      res.status(200).send(destinations);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
