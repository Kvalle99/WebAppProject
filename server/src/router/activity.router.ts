import express, { Request, Response } from "express";
import { Activity } from "../model/activity";
import { ActivityService } from "../service/activity.service";
import { IActivityService } from "../service/iactivityservice";

const activityService: IActivityService = new ActivityService();

export const ActivityRouter = express.Router();

ActivityRouter.get(
  "/getAllActivites",
  async (req: Request<{}, {}, {}>, res: Response<Activity[]>) => {
    try {
      const destination: any = req.query?.dest;
      const searchText: any = req.query.searchText;
      const activities = await activityService.getAllActivities(
        destination,
        searchText
      );
      res.status(200).send(activities);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
