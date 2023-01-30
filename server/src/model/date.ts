export class Date {
  year: bigint;
  month: bigint;
  day: bigint;

  constructor(year: bigint, month: bigint, day: bigint) {
    this.year = year;
    this.month = month;
    this.day = day;
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
