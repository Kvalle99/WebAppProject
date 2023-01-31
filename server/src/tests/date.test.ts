import { ourDate } from "../model/date";

test("Correct formatted date", async () => {
  const date = await new ourDate(BigInt(2024), BigInt(11), BigInt(22));
  expect(date.getDay() == BigInt(22));
  expect(date.getMonth() == BigInt(11));
  expect(date.getYear() == BigInt(2024));
});
