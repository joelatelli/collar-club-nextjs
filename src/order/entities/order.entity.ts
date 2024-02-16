import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../libs";
import { CustomerEntity } from "../../customer";
import { ProductOrderEntity } from "./product-order.entity";

@Entity({ name: "purchases" })
export class OrderEntity extends BaseEntity {
  @Column()
  status!: string;

  @Column()
  paymentMethod!: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  @JoinColumn({ name: "customer_id" })
  customer!: CustomerEntity;

  @OneToMany(
    () => ProductOrderEntity,
    (productOrder) => productOrder.order
  )
  productOrder!: ProductOrderEntity[];

}
