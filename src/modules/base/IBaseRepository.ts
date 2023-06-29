export interface IBaseRepository<T> {
  create(item: T): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>;
  
  delete(id: string): Promise<boolean>;
  find(): Promise<T[]>;
  findOne(id: string): Promise<T>;
}