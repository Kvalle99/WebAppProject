import express, {Request,Response} from "express";
import { TripService } from "../service/tripservice";

const tripService = new TripService();

export const TripRouter = express.Router();

TripRouter.get("hotel", async (
    req: Request<{}, {}, {}>,
    res: Response<string>
) => {
    try {
        const hotel = await tripService.getHotel();
        res.status(200).send(hotel);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});