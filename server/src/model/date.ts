export class ourDate {
  year!: bigint;
  month!: bigint;
  day!: bigint;

  constructor(year: bigint, month: bigint, day: bigint) {
    try {
      if (month < 13 && month > 0 && day < 32 && day > 0) {
        this.year = year;
        this.month = month;
        this.day = day;
      } else {
        throw new Error("Wrong date format");
      }
    } catch (e) {
      console.log(e);
    }
  }

  getDate(): string {
    return (
      this.day.toString() +
      "/" +
      this.month.toString() +
      "/" +
      this.year.toString()
    );
  }

  getYear(): bigint {
    return this.year;
  }

  getMonth(): bigint {
    return this.month;
  }

  getDay(): bigint {
    return this.day;
  }
}
