import { TripService } from "../service/trip.service";

test("Change hotel test", async () => {
  const service = new TripService();
  service.changeAccomodation(11, 6845191, "Backpackers paradise", "Chiang Mai");
  const newHotel = await service.getAccomodation(6845191);
  console.log(newHotel);
  expect(newHotel === "Backpackers paradise").toBeTruthy();
});
