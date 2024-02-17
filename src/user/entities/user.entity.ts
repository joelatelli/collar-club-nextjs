import { Column, Entity, OneToMany, Index } from "typeorm";
import { BaseEntity } from "../../libs";
import { Exclude } from "class-transformer";
import { RoleType } from "../../types";
import { EventEntity } from "../../event";
import { IsEmail, Length } from "class-validator";
import bcrypt from 'bcryptjs';

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {

    @Index()
    @Length(3, 255, { message: "Username must be at least 3 characters long" })
    @Column()
    username!: string;

    @Column()
    firstName!: string;

    @Column({ nullable: true })
    lastName?: string;

    @Index()
    @IsEmail()
    @Column({ unique: true})
    email!: string;

    @Exclude()
    @Column()
    @Length(6, 255)
    password!: string;

    @Column({ nullable: true })
    phoneNumber?: string;

    @Column({ default: false, nullable: false })
    isVerified!: boolean;

    @Column({ default: '' })
    avatarImageUrl?: string;

    @Column({ nullable: true })
    resetPasswordToken?: string;

    @Column({ type: "enum", enum: RoleType, nullable: false })
    role!: RoleType;

    @OneToMany(() => EventEntity, (event) => event.creator)
    events!: EventEntity[];

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
    
    checkIfPasswordMatch(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}
