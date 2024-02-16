import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../libs";
import { UserEntity } from "../../user";

export class CustomerDTO extends BaseDTO {
  @IsNotEmpty()
  address!: string;

  @IsNotEmpty()
  dni!: number;

  @IsNotEmpty()
  user!: UserEntity;
}
