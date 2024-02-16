import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../libs";
import { ProductEntity } from "../../product";

@Entity({ name: "categories" })
export class CategoryEntity extends BaseEntity {
  @Column()
  categoryName!: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products!: ProductEntity[];
}
