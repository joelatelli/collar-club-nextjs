import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { CategoryEntity } from "../../category";
import { ProductOrderEntity } from "../../order";
import { FavoriteEntity } from "../../favorite";
import { OptionCategoryEntity } from "./option-category.entity";

@Entity({ name: "products" })
export class ProductEntity extends BaseEntity {

    @Column()
    name!: string;

    @Column()
    desc!: string;

    @Column({ type: "decimal" })
    price!: number;

    @Column()
    imageURL!: string;

    @ManyToOne(() => CategoryEntity, (category) => category.products)
    @JoinColumn({ name: "category_id" })
    category!: CategoryEntity;

    @OneToMany( () => ProductOrderEntity, (productOrder) => productOrder.product)
    productOrder!: ProductOrderEntity[];

    @OneToMany(() => FavoriteEntity, (favorite) => favorite.product)
    favorites!: FavoriteEntity[];

    @OneToMany(() => OptionCategoryEntity, (option) => option.product)
    options!: OptionCategoryEntity[];
}
