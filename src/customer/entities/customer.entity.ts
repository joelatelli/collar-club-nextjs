import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../libs";
import { OrderEntity } from "../../order";
import { ProfileEntity } from "../../profile";

@Entity({ name: "customers" })
export class CustomerEntity extends BaseEntity {
  @Column()
  address!: string;

  @Column()
  dni!: number;

  @OneToMany(() => OrderEntity, (order) => order.customer)
  orders!: OrderEntity[];

  @OneToMany(() => ProfileEntity, (profile) => profile.customer)
  profiles!: ProfileEntity[];
}
