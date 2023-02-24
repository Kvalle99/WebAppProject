import express, { Request, Response } from "express";
import { Activity } from "../model/activity";
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
  "/handleActivity",
  async (
    req: Request<{}, {}, { activity: string; id: string }>,
    res: Response
  ) => {
    try {
      console.log("router " + req.body.activity + " " + req.body.id);
      await tripService.handleActivity(req.body.activity, req.body.id);
      res.status(200);
    } catch (e: any) {
      res.status(406).send(e.message);
    }
  }
);

TripRouter.post(
  "/getActivities",
  async (req: Request<{}, {}, { id: string }>, res: Response<string[]>) => {
    try {
      const userId: string = req.body.id;
      const actList = await tripService.getActivitiesByName(userId);
      res.status(200).send(actList);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

TripRouter.post(
  "/saveDates",
  async (
    req: Request<
      {},
      {},
      { userId: number; tripId: string; startDate: number; endDate: number }
    >,
    res: Response
  ) => {
    try {
      await tripService.changeDates(
        req.body.userId,
        req.body.tripId,
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
    req: Request<
      {},
      {},
      {
        userId: number;
        tripId: string;
        accomodationName: string;
        accomodationCity: string;
      }
    >,
    res: Response<boolean>
  ) => {
    try {
      const hotel: string = req.body.accomodationName;
      const tripId: string = req.body.tripId;
      const userId: number = req.body.userId;
      const accomodationCity: string = req.body.accomodationCity;
      await tripService.changeAccomodation(
        userId,
        tripId,
        hotel,
        accomodationCity
      );
      res.status(200).send();
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
TripRouter.post(
  "/changeDestination",
  async (
    req: Request<
      {},
      {},
      { userId: number; tripId: string; destinationName: string }
    >,
    res: Response<boolean>
  ) => {
    try {
      const dest: string = req.body.destinationName;
      const tripId: string = req.body.tripId;
      const userId: number = req.body.userId;
      const success = await tripService.changeDestination(userId, tripId, dest);
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

TripRouter.post(
  "/createTrip",
  async (
    req: Request<{}, {}, { userId: number; tripName: string }>,
    res: Response<Trip>
  ) => {
    try {
      const userId: number = req.body.userId;
      const tripName: string = req.body.tripName;
      const trip = await tripService.createTrip(userId, tripName);
      res.status(200).send(trip);
    } catch (e: any) {}
  }
);
