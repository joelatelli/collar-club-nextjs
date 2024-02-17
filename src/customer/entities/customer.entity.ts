import { Column, Entity, OneToMany, Index } from "typeorm";
import { BaseEntity } from "../../libs";
import { OrderEntity } from "../../order";
import { ProfileEntity } from "../../profile";
import { IsEmail, Length } from "class-validator";
import { Exclude } from "class-transformer";
import { FavoriteEntity } from "../../favorite";
import bcrypt from 'bcryptjs';

@Entity({ name: "customers" })
export class CustomerEntity extends BaseEntity {

    @Index()
    @Length(3, 255, { message: "Username must be at least 3 characters long" })
    @Column({ unique: true})
    username!: string;

    @Column()
    firstName!: string;

    @Column()
    lastname?: string;

    @Index()
    @IsEmail()
    @Column({ unique: true})
    email!: string;

    @Exclude()
    @Column()
    @Length(6, 255)
    password!: string;

    @Column()
    phoneNumber?: string;

    @Column({ default: false, nullable: false })
    isVerified?: boolean;

    @Column({ default: '' })
    avatarImageUrl?: string;

    @Column({ nullable: true })
    resetPasswordToken?: string;

    @OneToMany(() => OrderEntity, (order) => order.customer)
    orders!: OrderEntity[];

    @OneToMany(() => ProfileEntity, (profile) => profile.customer)
    profiles!: ProfileEntity[];

    @OneToMany(() => FavoriteEntity, (favorite) => favorite.customer)
    favoriteProducts!: FavoriteEntity[];

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
    
    checkIfPasswordMatch(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}
