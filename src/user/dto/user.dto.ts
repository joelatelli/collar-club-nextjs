import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { BaseDTO } from "../../libs";
import { RoleType } from "../../types";

export class UserDTO extends BaseDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsString()
  @IsNotEmpty()
  city!: string;

  @IsString()
  @IsNotEmpty()
  province!: string;

  @IsNotEmpty()
  role!: RoleType;
}
