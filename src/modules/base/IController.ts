import { RouterContext } from "../../../deps.ts";

export default interface IBaseController<T> {
  create(ctx: RouterContext<string, any, any>): Promise<boolean>;
  update(ctx: RouterContext<string, any, any>): Promise<boolean>;
  delete(ctx: RouterContext<string, any, any>): Promise<boolean>;
  find(ctx: RouterContext<string, any, any>) : void;
  findOne(ctx: RouterContext<string, any, any>): Promise<T>;
}