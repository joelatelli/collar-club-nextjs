import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { CategoryEntity } from "../../category";
import { ProductOrderEntity } from "../../order";

@Entity({ name: "products" })
export class ProductEntity extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    productName!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;

    @ManyToOne(() => CategoryEntity, (category) => category.products)
    @JoinColumn({ name: "category_id" })
    category!: CategoryEntity;

    @OneToMany(
        () => ProductOrderEntity,
        (productOrder) => productOrder.product
    )
    productOrder!: ProductOrderEntity[];
}
