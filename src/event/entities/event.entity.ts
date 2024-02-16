import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../libs";
import { UserEntity } from "../../user";

@Entity({ name: "events" })
export class EventEntity extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  desc!: string;

  @Column()
  eventURL!: string;

  @Column()
  imageURL!: string;

  @Column()
  address!: string;

  @Column()
  startDate!: string;

  @Column()
  endDate!: string;

  @ManyToOne(() => UserEntity, (user) => user.events)
  @JoinColumn({ name: "user_id" })
  creator!: UserEntity;
}
