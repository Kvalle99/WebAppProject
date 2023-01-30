import { SuperTest } from "supertest";
import { app } from "../start";
import request from "supertest";

test("End-to-end test", async () => {
    const desc = "TestHotel";
    const res1 = await request(app).get("/hotel");
    expect(res1.statusCode).toEqual(200);
    /*
    expect(res1.body.description).toEqual(desc);
    const res2 = await request.get("/task");
    expect(res2.statusCode).toEqual(200);
    expect(res2.body.map((task : Task) => task.description)).toContain(desc);
    */
});