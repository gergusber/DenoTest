import { IBaseRepository } from "../../base/IBaseRepository.ts";
import WorkStation from "../dto/workstation.dto.ts";

export default class WorkstationRepository<WorkStation> implements IBaseRepository<WorkStation> {
  create(item: WorkStation): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: WorkStation): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(item: WorkStation): Promise<WorkStation[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<WorkStation> {
    throw new Error("Method not implemented.");
  }
}