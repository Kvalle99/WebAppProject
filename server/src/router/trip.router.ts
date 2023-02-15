import express, { Request, Response } from "express";
import { Trip } from "../model/trip";
import { TripService } from "../service/trip.service";

const tripService = new TripService();

export const TripRouter = express.Router();

TripRouter.post(
  "/getTrip",
  async (
    req: Request<{}, {}, { myId: number; tripId: string }>,
    res: Response<Trip>
  ) => {
    try {
      const trip = await tripService.getMyTrip(req.body.myId, req.body.tripId);
      res.status(200).send(trip);
    } catch (e: any) {
      res.status(406).send(e.message);
    }
  }
);

TripRouter.post(
  "/saveDates",
  async (
    req: Request<{}, {}, { id: string; startDate: number; endDate: number }>,
    res: Response
  ) => {
    try {
      await tripService.changeDates(
        req.body.id,
        new Date(req.body.startDate * 1000),
        new Date(req.body.endDate * 1000)
      );
      res.status(200).send();
    } catch (e: any) {
      res.status(406).send();
    }
  }
);

TripRouter.post(
  "/changeAccomodations",
  async (
    req: Request<{}, {}, { id: string; accomodationName: string }>,
    res: Response<boolean>
  ) => {
    try {
      const hotel: string = req.body.accomodationName;
      const id: string = req.body.id;
      const success = await tripService.changeAccomodation(id, hotel);
      res.status(200).send(success);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
TripRouter.post(
  "/changeDestination",
  async (
    req: Request<{}, {}, { id: string; destinationName: string }>,
    res: Response<boolean>
  ) => {
    try {
      const dest: string = req.body.destinationName;
      const id: string = req.body.id;
      const success = await tripService.changeDestination(id, dest);
      res.status(200).send(success);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

TripRouter.post(
  "/GetMyTrips",
  async (req: Request<{}, {}, { id: number }>, res: Response<string[]>) => {
    try {
      const userId: number = req.body.id;
      const tripList = await tripService.getMyTrips(userId);
      res.status(200).send(tripList);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
