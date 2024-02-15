import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../libs";
import { Exclude } from "class-transformer";
import { RoleType } from "../../types";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
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

}
