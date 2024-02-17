import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { OrderEntity, ProductOrderEntity } from "../entities";
import { OrderDTO } from "../dto";
import { ProductService } from "../../product";
import { CustomerService } from "../../customer";

export class OrderService extends BaseService<OrderEntity> {
  constructor(
    readonly productService: ProductService = new ProductService(),
    readonly customerService: CustomerService = new CustomerService()
  ) {
    super(OrderEntity);
  }

  async findAllOrders(): Promise<OrderEntity[]> {
    return (await this.execRepository).find();
  }

  async findOrderById(id: string): Promise<OrderEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  // async createOrder(body: OrderDTO): Promise<OrderEntity> {
  //   return (await this.execRepository).save(body);
  // }

  async createOrder(body: OrderDTO): Promise<OrderEntity> {
    const customer = await this.customerService.findCustomerById(body.customerId);
    if (!customer) {
      throw new Error("Customer not found");
    }

    const order = new OrderEntity();
    order.status = body.status;
    order.paymentMethod = body.paymentMethod;
    order.customer = customer;

    order.productOrder = [];
    for (const productDTO of body.products) {
      const product = await this.productService.findProductById(productDTO.productId);
      if (!product) {
        throw new Error(`Product with id ${productDTO.productId} not found`);
      }

      const productOrder = new ProductOrderEntity();
      productOrder.quantity = productDTO.quantity;
      productOrder.totalPrice = productDTO.totalPrice;
      productOrder.size = productDTO.size;
      productOrder.product = product;
      productOrder.order = order;

      order.productOrder.push(productOrder);
    }

    return (await this.execRepository).save(order);
  }

  async deleteOrder(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updateOrder(
    id: string,
    infoUpdate: OrderDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
