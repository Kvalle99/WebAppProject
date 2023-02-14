import { TripService } from "../service/trip.service";

test("Change hotel test", async () => {
  const service = new TripService();
  service.changeAccomodation("6845191", "Brummas place 10/10");
  const newHotel = await service.getAccomodation("6845191");
  expect(newHotel === "Brummas place 10/10").toBeTruthy();
});
