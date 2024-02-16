import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { Exclude } from "class-transformer";
import { RoleType } from "../../types";
import { EventEntity } from "../../event";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  username!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Exclude()
  @Column()
  password!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;

  @Column({ type: "enum", enum: RoleType, nullable: false })
  role!: RoleType;

  @OneToMany(() => EventEntity, (event) => event.creator)
  events!: EventEntity[];

}
