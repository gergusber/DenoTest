// src/routes.ts
import { Router } from "../../deps.ts";
import WorkstationController from "../controllers/workstation.ts";
import JobCardController from "../controllers/jobcard.ts";

const router = new Router();

router
  .get("/workstations", WorkstationController.get)
  .post("/workstations", WorkstationController.create)
  .put("/workstations/:id", WorkstationController.update)
  .delete("/workstations/:id", WorkstationController.destroy);

router
  .get("/jobcards", JobCardController.get)
  .post("/jobcards", JobCardController.create)
  .put("/jobcards/:id", JobCardController.update)
  .delete("/jobcards/:id", JobCardController.destroy);

export default router;
