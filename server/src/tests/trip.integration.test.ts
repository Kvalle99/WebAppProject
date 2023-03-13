import { SuperTest } from "supertest";
import { app } from "../start";
import request from "supertest";

test("End-to-end test", async () => {
  const res1 = await request(app).get(
    "/accomodation/getAccomodations?destination=&searchText="
  );
  expect(res1.statusCode).toEqual(200);
  expect(res1.text).toContain("Hotel 1");
  const res2 = await request(app).post("/trip/changeAccomodations").send({
    userId: "11",
    tripId: 6845191,
    accomodationName: "Backpackers paradise",
    accomodationCity: "Chiang Mai",
  });
  console.log(res2.text);
  expect(res2.text).toBe("");
  expect(res2.statusCode).toBe(200);
});
