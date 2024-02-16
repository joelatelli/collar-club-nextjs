import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { OrderEntity } from "../entities";
import { OrderDTO } from "../dto";

export class OrderService extends BaseService<OrderEntity> {
  constructor() {
    super(OrderEntity);
  }

  async findAllPurchases(): Promise<OrderEntity[]> {
    return (await this.execRepository).find();
  }

  async findPurchaseById(id: string): Promise<OrderEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async createPurchase(body: OrderDTO): Promise<OrderEntity> {
    return (await this.execRepository).save(body);
  }

  async deletePurchase(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updatePurchase(
    id: string,
    infoUpdate: OrderDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
