import { Router, request } from "express";
import SchedulesRepository from "../repositories/SchedulesRepository";
import CreatescheduleService from "../services/CreateScheduleService";

const schedulesRouter = Router();
const schedulesRepository = new SchedulesRepository();

schedulesRouter.get("/", (request, response) => {
  const schedules = schedulesRepository.all();

  return response.json(schedules);
});

schedulesRouter.post("/", (request, response) => {
  const { description, date } = request.body;

  const createScheduleService = new CreatescheduleService(schedulesRepository);

  const schedule = createScheduleService.execute({ description, date });

  return response.json(schedule);
});

schedulesRouter.delete("/:id", (request, response) => {
  try {
    const { id } = request.params;

    schedulesRepository.delete(id);

    return response.status(204).send();
  } catch (error) {
    return response.status(404).json({ error });
  }
});

export default schedulesRouter;
