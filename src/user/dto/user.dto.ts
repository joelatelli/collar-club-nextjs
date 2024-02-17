import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { BaseDTO } from "../../libs";
import { RoleType } from "../../types";

export class UserDTO extends BaseDTO {
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

    @IsNotEmpty()
    role!: RoleType;

}
