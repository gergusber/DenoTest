// src/routes.ts
import { Router } from "../../deps.ts";
import WorkstationController from "../modules/workStation/controller/workstation.controller.ts";
import JobCardController from "../modules/jobCard/controller/jobcard.controller.ts";


const router = new Router();

router
  .get("/workstations", WorkstationController.find)
  .get("/workstations/:id", WorkstationController.findOne)
  .post("/workstations", WorkstationController.create)
  .put("/workstations/:id", WorkstationController.update)
  .delete("/workstations/:id", WorkstationController.delete);

router
  .get("/jobcards", JobCardController.find)
  .get("/jobcards/:id", JobCardController.findOne)
  .post("/jobcards", JobCardController.create)
  .put("/jobcards/:id", JobCardController.update)
  .delete("/jobcards/:id", JobCardController.delete);

export default router;
