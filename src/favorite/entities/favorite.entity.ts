import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseEntity } from "../../libs";
import { CustomerEntity } from "../../customer";
import { ProductEntity } from "../../product";

@Entity({ name: "favorites" })
export class FavoriteEntity extends BaseEntity {

    @ManyToOne(() => CustomerEntity, (customer) => customer.id, { onDelete: 'CASCADE' })
    @JoinColumn()
    customer!: CustomerEntity;

    @PrimaryColumn()
    @Index()
    userId!: string;

    @ManyToOne(() => ProductEntity, (product) => product.id, { onDelete: 'CASCADE' })
    @JoinColumn()
    product!: ProductEntity;

    @PrimaryColumn()
    @Index()
    productId!: string;

}
