import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../libs";
import { ProductEntity } from "../../product";
import { OrderEntity } from "./order.entity";

@Entity({ name: "purchases_products" })
export class ProductOrderEntity extends BaseEntity {
  @Column()
  quantityProduct!: number;

  @Column()
  totalPrice!: number;

  @ManyToOne(() => OrderEntity, (order) => order.productOrder)
  @JoinColumn({ name: "order_id" })
  order!: OrderEntity;

  @ManyToOne(() => ProductEntity, (product) => product.productOrder)
  @JoinColumn({ name: "product_id" })
  product!: ProductEntity;
}
