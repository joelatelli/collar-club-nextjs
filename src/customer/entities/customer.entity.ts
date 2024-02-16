import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { OrderEntity } from "../../order";
import { ProfileEntity } from "../../profile";

@Entity({ name: "customers" })
export class CustomerEntity extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    address!: string;

    @Column()
    dni!: number;

    @OneToMany(() => OrderEntity, (order) => order.customer)
    orders!: OrderEntity[];

    @OneToMany(() => ProfileEntity, (profile) => profile.customer)
    profiles!: ProfileEntity[];
    
}
