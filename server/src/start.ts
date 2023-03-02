import express from "express";
import { ActivityRouter } from "./router/activity.router";
import { TripRouter } from "./router/trip.router";
import cors from "cors";
import { AccomodationRouter } from "./router/accomodation.router";
import { DestinationRouter } from "./router/destination.router";
import { UserRouter } from "./router/userRouter";

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/trip", TripRouter);
app.use("/activity", ActivityRouter);
app.use("/accomodation", AccomodationRouter);
app.use("/destination", DestinationRouter);
app.use("/user", UserRouter);
