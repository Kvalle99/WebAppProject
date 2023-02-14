import express, { Request, Response } from "express";
import { Destination } from "../model/destinations";
import { DestinationService } from "../service/destination.service";

const destinationService = new DestinationService();
export const DestinationRouter = express.Router();

DestinationRouter.get(
  "/getDestinations",
  async (req: Request<{}, {}, {}>, res: Response<Destination[]>) => {
    try {
      const destinations = await destinationService.getDestinations();
      res.status(200).send(destinations);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
