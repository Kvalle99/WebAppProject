import express from "express";
import { TripRouter } from "./router/trip.router";

export const app = express();

app.use(express.json());
app.use("/hotel", TripRouter);