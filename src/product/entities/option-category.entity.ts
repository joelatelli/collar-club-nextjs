import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { CustomerEntity } from "../../customer";
import { ProductEntity } from "./product.entity";
import { OptionEntity } from "./option.entity";
import { DecimalColumnTransformer } from '../../utils/helpers';

@Entity({ name: "option_category" })
export class OptionCategoryEntity extends BaseEntity {
    
    @Column()
    title!: string;

    @Column({ default: true })
    isOptional!: boolean;

    @ManyToOne(() => ProductEntity, product => product.options)
    product!: ProductEntity;

    @OneToMany(() => OptionEntity, (option) => option.category)
    options?: OptionEntity[];

}
