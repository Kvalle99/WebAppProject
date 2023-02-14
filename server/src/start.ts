import express from "express";
import { ActivityRouter } from "./router/activity.router";
import { TripRouter } from "./router/trip.router";
import cors from "cors";
import { AccomodationRouter } from "./router/accomodation.router";

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/trip", TripRouter);
app.use("/activity", ActivityRouter);
app.use("/accomodation", AccomodationRouter);
