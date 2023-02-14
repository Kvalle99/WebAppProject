import { ourDate } from "../model/date";

test("Correct formatted date", async () => {
  const date = await new ourDate(2024, 11, 22);
  expect(date.getDay() == 22);
  expect(date.getMonth() == 11);
  expect(date.getYear() == 2024);
});
