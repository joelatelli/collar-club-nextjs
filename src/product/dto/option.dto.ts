import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../../libs";

export class OptionDTO extends BaseDTO {
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  categoryId!: string;
}
