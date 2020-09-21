import { uuid } from "uuidv4";

class Schedule {
  id: String;

  description: String;

  date: Date;

  constructor({ description, date }: Omit<Schedule, "id">) {
    this.id = uuid();
    this.description = description;
    this.date = date;
  }
}

export default Schedule;
