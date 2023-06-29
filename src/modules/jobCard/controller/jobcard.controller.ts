// src/controllers/jobcard.ts
import { RouterContext } from "../../../../deps.ts";
import JobCard from "../dto/jobCard.dto.ts";
import IBaseController from '../../base/IController.ts';
import JobCardRepository from "../repository/jobcard.repository.ts";

 class JobCardController implements IBaseController<JobCard>  {
  create(ctx: RouterContext<string, any, any>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(ctx: RouterContext<string, any, any>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(ctx: RouterContext<string, any, any>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(ctx: RouterContext<string, any, any>) {
    const jobCards = JobCardRepository.find();
    ctx.response.body = jobCards;  
  }
  findOne(ctx: RouterContext<string, any, any>): Promise<JobCard> {
    throw new Error("Method not implemented.");
  }
}
export default new JobCardController()

// export default {
//   async get(ctx: RouterContext) {
//     // const jobCards = await JobCard.all();
//     // ctx.response.body = jobCards;
//   },

//   async create(ctx: RouterContext) {
//     // const { name, description, state, workstationId } = await ctx.request.body().value;
//     // const jobCard = new JobCard({ name, description, state, workstationId });
//     // await jobCard.save();
//     // ctx.response.body = jobCard;
//   },

//   async update(ctx: RouterContext) {
//     // const id = Number(ctx.params.id);
//     // const { name, description, state, workstationId } = await ctx.request.body().value;
//     // await JobCard.where("id", id).update({ name, description, state
//     //   , workstationId });
//     //   const jobCard = await JobCard.find(id);
//     //   ctx.response.body = jobCard;
//     //   },
//     //   async destroy(ctx: RouterContext) {
//     //     const id = Number(ctx.params.id);
//     //     await JobCard.where("id", id).delete();
//     //     ctx.response.status = 204;
//     //   },
//   }
// }