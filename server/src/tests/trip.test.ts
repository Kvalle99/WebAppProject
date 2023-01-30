import { TripService } from "../service/trip.service";

test("Change hotel test", async () => {
  const service = new TripService();
  service.changeHotel("Brummas place 10/10");
  const newHotel = await service.getHotel();
  expect(newHotel === "Brummas place 10/10").toBeTruthy();
});
