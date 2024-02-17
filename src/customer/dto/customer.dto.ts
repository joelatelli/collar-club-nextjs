import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { BaseDTO } from "../../libs";
import { UserEntity } from "../../user";

export class CustomerDTO extends BaseDTO {
    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    lastName?: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
}
