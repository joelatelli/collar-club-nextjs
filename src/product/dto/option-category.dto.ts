import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../../libs";
import { OptionDTO } from "./option.dto";

export class OptionCategoryDTO extends BaseDTO {
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  isOptional!: boolean;

  @IsNotEmpty()
  productId!: string;

  @IsOptional()
  options?: OptionDTO[];
}
