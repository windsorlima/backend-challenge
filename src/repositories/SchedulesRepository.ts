import Schedule from "../models/Schedule";

interface CreateScheduleDTO {
  description: String;

  date: Date;
}

class SchedulesRepository {
  private schedules: Schedule[];

  constructor() {
    this.schedules = [];
  }

  public all(): Schedule[] {
    return this.schedules;
  }

  public create({ description, date }: CreateScheduleDTO) {
    const schedule = new Schedule({ description, date });

    this.schedules.push(schedule);

    return schedule;
  }

  public delete(id: string) {
    const scheduleIndex = this.schedules.findIndex(
      (element) => element.id === id
    );

    if (scheduleIndex < 0) {
      throw new Error("Schedule not found");
    }

    this.schedules.splice(scheduleIndex, 1);
  }
}

export default SchedulesRepository;
