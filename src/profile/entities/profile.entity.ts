import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../libs";
import { CustomerEntity } from "../../customer";

@Entity({ name: "profiles" })
export class ProfileEntity extends BaseEntity {
  @Column()
  productName!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @ManyToOne(() => CustomerEntity, (customer) => customer.profiles)
  @JoinColumn({ name: "customer_id" })
  customer!: CustomerEntity;
}
