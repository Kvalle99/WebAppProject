import { SuperTest } from "supertest";
import { app } from "../start";
import request from "supertest";

test("End-to-end test", async () => {
  const res1 = await request(app).get("/hotel/getHotel");
  expect(res1.statusCode).toEqual(200);
  expect(res1.text).toEqual("testHotel");
});
