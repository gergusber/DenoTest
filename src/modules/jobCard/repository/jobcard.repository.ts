import { IBaseRepository } from "../../base/IBaseRepository.ts";
import JobCard from "../dto/jobCard.dto.ts";

 class JobCardRepository<T> implements IBaseRepository<T> {
  create(item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}

export default new JobCardRepository<JobCard>();