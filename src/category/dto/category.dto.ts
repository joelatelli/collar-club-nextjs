import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../libs";

export class CategoryDTO extends BaseDTO {
  @IsNotEmpty()
  categoryName!: string;
}
