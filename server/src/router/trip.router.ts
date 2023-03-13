import express, { Request, Response } from "express";
import { Activity } from "../model/activity";
import { simpleTrip, Trip } from "../model/trip";
import { ITripService } from "../service/itrip.service";
import { IUserService } from "../service/iuser.service";
import { TripService } from "../service/trip.service";
import { UserService } from "../service/user.service";

const tripService: ITripService = new TripService();
const userService : IUserService = new UserService();

export const TripRouter = express.Router();

TripRouter.get(
  //changed
  "/getTrip",
  async (req: Request<{}, {}, {}>, res: Response<Trip>) => {
    try {
      const token = req.query.userToken;
      if (userService.checkUser(String(token)!) == Number(req.query.myId)) {
        const trip = await tripService.getMyTrip(
          Number(req.query.myId),
          Number(req.query.tripId)
        );
        res.status(200).send(trip);
      } else res.status(406).send();
    } catch (e: any) {
      res.status(406).send(e.message);
    }
  }
);

TripRouter.post(
  "/handleActivity",
  async (
    req: Request<{}, {}, { activity: string; dest: string; id: number }>,
    res: Response<string>
  ) => {
    try {
      await tripService.handleActivity(
        req.body.activity,
        req.body.dest,
        req.body.id
      );
      res.status(200).send("ok");
    } catch (e: any) {
      res.status(406).send(e.message);
    }
  }
);

TripRouter.get(
  //changed
  "/getActivities",
  async (req: Request<{}, {}, {}>, res: Response<string[]>) => {
    try {
      const userId = req.query.id;
      const actList = await tripService.getActivitiesByName(Number(userId));
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
      { userId: number; tripId: number; startDate: number; endDate: number }
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
        tripId: number;
        accomodationName: string;
        accomodationCity: string;
      }
    >,
    res: Response<boolean>
  ) => {
    try {
      const hotel: string = req.body.accomodationName;
      const tripId: number = req.body.tripId;
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
      { userId: number; tripId: number; destinationName: string }
    >,
    res: Response<boolean>
  ) => {
    try {
      const dest: string = req.body.destinationName;
      const tripId: number = req.body.tripId;
      const userId: number = req.body.userId;
      const success = await tripService.changeDestination(userId, tripId, dest);
      res.status(200).send(success);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

TripRouter.get(
  //changed
  "/getMyTrips",
  async (req: Request<{}, {}, {}>, res: Response<simpleTrip[]>) => {
    try {
      const token = req.query.userToken;
      const userId: number = Number(req.query.uId);
      if (userService.checkUser(String(token)) == userId) {
        const tripList = await tripService.getMyTrips(userId);
        /* const trip_response = tripList.map(( id: number, name: string ) => {
          id: id,
          name,
        }); */
        res.status(200).send(tripList);
      } else res.status(401).send();
    } catch (e: any) {
      res.status(401).send(e.message);
    }
  }
);

TripRouter.post(
  "/createTrip",
  async (
    req: Request<
      {},
      {},
      { userToken: string; userId: number; tripName: string }
    >,
    res: Response<Trip>
  ) => {
    try {
      const userToken = req.body.userToken;
      const userId: number = req.body.userId;
      const tripName: string = req.body.tripName;
      if (userService.checkUser(userToken) == userId) {
        const trip = await tripService.createTrip(userId, tripName);
        res.status(200).send(trip);
      } else res.status(406).send();
    } catch (e: any) {
      res.status(406).send();
    }
  }
);
