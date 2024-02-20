import { Column, Entity, Index, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { CustomerEntity } from "./customer.entity";

@Entity({ name: "tokens" })
export class TokenEntity extends BaseEntity {

    @Index()
    @Column()
    accessToken!: string;

    @Column()
    refreshToken!: string;

    @ManyToOne(() => CustomerEntity)
    @JoinColumn({ name: "userId" })
    customer!: CustomerEntity;
}
