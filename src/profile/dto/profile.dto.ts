import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../libs";

export class ProfileDTO extends BaseDTO {
  @IsNotEmpty()
  productName!: string;

  @IsNotEmpty()
  description!: string;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  userId!: string;
}
