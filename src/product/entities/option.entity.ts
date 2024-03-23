import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { CustomerEntity } from "../../customer";
import { OptionCategoryEntity } from "./option-category.entity";
import { DecimalColumnTransformer } from '../../utils/helpers';

@Entity({ name: "options" })
export class OptionEntity extends BaseEntity {
    
    @Column()
    title!: string;

    @Column('decimal', {transformer: new DecimalColumnTransformer()})
    price!: number;

    @ManyToOne(() => OptionCategoryEntity, category => category.options)
    category!: OptionCategoryEntity;

}
