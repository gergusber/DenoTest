// src/controllers/jobcard.ts
import { RouterContext } from "../deps.ts";
import JobCard from "../models/jobcard.ts";

export default {
  async get(ctx: RouterContext) {
    const jobCards = await JobCard.all();
    ctx.response.body = jobCards;
  },

  async create(ctx: RouterContext) {
    const { name, description, state, workstationId } = await ctx.request.body().value;
    const jobCard = new JobCard({ name, description, state, workstationId });
    await jobCard.save();
    ctx.response.body = jobCard;
  },

  async update(ctx: RouterContext) {
    const id = Number(ctx.params.id);
    const { name, description, state, workstationId } = await ctx.request.body().value;
    await JobCard.where("id", id).update({ name, description, state
      , workstationId });
      const jobCard = await JobCard.find(id);
      ctx.response.body = jobCard;
      },
      async destroy(ctx: RouterContext) {
        const id = Number(ctx.params.id);
        await JobCard.where("id", id).delete();
        ctx.response.status = 204;
      },
    };