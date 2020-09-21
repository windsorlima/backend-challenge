import SchedulesRepository from "../repositories/SchedulesRepository";
import Schedule from "../models/Schedule";

interface ScheduleDTO {
  description: String;

  date: Date;
}
class CreatescheduleService {
  private schedulesRepository: SchedulesRepository;

  constructor(schedulesRepository: SchedulesRepository) {
    this.schedulesRepository = schedulesRepository;
  }

  public execute({ description, date }: ScheduleDTO): Schedule {
    const schedule = this.schedulesRepository.create({
      description,
      date,
    });

    return schedule;
  }
}

export default CreatescheduleService;
