import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { CustomerEntity } from "../../customer";

@Entity({ name: "profiles" })
export class ProfileEntity extends BaseEntity {

    @Column()
    name!: string;

    @Column()
    age!: string;

    @Column()
    breed!: string;

    @Column()
    weight!: string;

    @Column()
    temperment!: string;

    @Column()
    specialNeeds!: string;

    @Column()
    lastVaccinated!: string;

    @ManyToOne(() => CustomerEntity, (customer) => customer.profiles)
    @JoinColumn({ name: "customer_id" })
    customer!: CustomerEntity;
    
}