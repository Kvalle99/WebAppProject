import express, { Request, Response } from "express";
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

TripRouter.put("/changeHotel", async (
  req: Request<{}, {}, { hotel : string }>,
  res: Response<boolean>
) => {
  try {
      const hotel = req.body.hotel;
      const success = await tripService.changeHotel(hotel);
      res.status(200).send(success);
  } catch (e: any) {
      res.status(500).send(e.message);
  }
})
