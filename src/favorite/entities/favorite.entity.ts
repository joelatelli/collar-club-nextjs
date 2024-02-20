import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseEntity } from "../../libs";
import { CustomerEntity } from "../../customer";
import { ProductEntity } from "../../product";

@Entity({ name: "favorites" })
export class FavoriteEntity extends BaseEntity {

    @PrimaryColumn()
    @Index()
    customerId!: string;

    @PrimaryColumn()
    @Index()
    productId!: string;

    @ManyToOne(() => CustomerEntity, (customer) => customer.favoriteProducts, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "userId" }) // Assuming you're using userId as the foreign key
    customer!: CustomerEntity;
  
    @ManyToOne(() => ProductEntity, (product) => product.favorites, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "productId" }) // Assuming you're using productId as the foreign key
    product!: ProductEntity;

}
