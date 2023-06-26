// src/controllers/workstation.ts
import { RouterContext } from "../../deps.ts";
import Workstation from "../models/workstation.ts";

export default {
  async get(ctx: RouterContext) {
    const workstations = await Workstation.all();
    ctx.response.body = workstations;
  },

  async create(ctx: RouterContext) {
    const { name, location } = await ctx.request.body().value;
    const workstation = new Workstation({ name, location });
    await workstation.save();
    ctx.response.body = workstation;
  },

  async update(ctx: RouterContext) {
    const id = Number(ctx.params.id);
    const { name, location } = await ctx.request.body().value;
    await Workstation.where("id", id).update({ name, location });
    const workstation = await Workstation.find(id);
    ctx.response.body = workstation;
  },

  async destroy(ctx: RouterContext) {
    const id = Number(ctx.params.id);
    await Workstation.where("id", id).delete();
    ctx.response.status = 204;
  },
};
