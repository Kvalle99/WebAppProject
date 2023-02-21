import express, {Request,Response} from "express";
import { Activity } from "../model/activity";
import { ActivityService } from "../service/activity.service";

const activityService = new ActivityService();

export const ActivityRouter = express.Router();

ActivityRouter.get("/getAllActivites", async (
    req: Request<{}, {}, {}>,
    res: Response<Activity[]>
) => {
    try {
        const activities = await activityService.getAllActivities();
        res.status(200).send(activities);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});


/*
ActivityRouter.get("/getDescription", async (
    req: Request<{}, {}, {}>,
    res: Response<string>
) => {
    try {
        const description = await activityService.getDescription();
        res.status(200).send(description);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

ActivityRouter.get("/getRating", async (
    req: Request<{},{},{}>,
    res: Response<string>
) => {
    try {
        const rating = await activityService.getRating();
        res.status(200).send(rating.toLocaleString());
    } catch (e: any) {
        res.status(500).send(e.message)
    }
});
*/