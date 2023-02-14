import express, { Request, response, Response } from "express";
import { Trip } from "../model/trip";
import { TripService } from "../service/trip.service";

const tripService = new TripService();

export const TripRouter = express.Router();

TripRouter.get(
  "/getHotel",
  async (req: Request<{}, {}, {}>, res: Response<string>) => {
    try {
      const hotel = await tripService.getHotel();
      res.status(200).send(hotel);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

TripRouter.post(
  "/getTrip",
  async (req: Request<{}, {}, { id: string }>, res: Response<Trip>) => {
    try {
      const trip = await tripService.getMyTrip(req.body.id);
      console.log(trip);
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
    res: Response<Trip>
  ) => {
    try {
      console.log("recieved dates:");
      console.log(req.body.startDate);
      console.log(req.body.endDate);
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

TripRouter.put(
  "/changeHotel",
  async (
    req: Request<{}, {}, { hotel: string; id: string }>,
    res: Response<boolean>
  ) => {
    try {
      const hotel = req.body.hotel;
      const id = req.body.id;
      const success = await tripService.changeHotel(id, hotel);
      res.status(200).send(success);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
