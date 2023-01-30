import express, {Request,Response} from "express";
import { ActivityService } from "../service/activity.service";

const activityService = new ActivityService();

export const ActivityRouter = express.Router();

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