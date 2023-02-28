/* //class not used in current version, uses built in Date instead
export class ourDate {
  private year!: number;
  private month!: number;
  private day!: number;

  constructor(year: number, month: number, day: number) {
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

  getYear(): number {
    return this.year;
  }

  getMonth(): number {
    return this.month;
  }

  getDay(): number {
    return this.day;
  }
}
 */
