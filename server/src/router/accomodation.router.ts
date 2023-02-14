import express, { Request, Response } from "express";
import { Accomodation } from "../model/accomodation";
import { AccomodationService } from "../service/accomodation.service";

const accomodationService = new AccomodationService();
export const AccomodationRouter = express.Router();

AccomodationRouter.get(
  "/getAccomodations",
  async (req: Request<{}, {}, {}>, res: Response<Accomodation[]>) => {
    try {
      const accomodations = await accomodationService.getAccomodations();
      res.status(200).send(accomodations);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
