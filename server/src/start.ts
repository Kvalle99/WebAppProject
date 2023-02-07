import express from "express";
import { ActivityRouter } from "./router/activity.router";
import { TripRouter } from "./router/trip.router";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/hotel", TripRouter);
app.use("/activity", ActivityRouter);
