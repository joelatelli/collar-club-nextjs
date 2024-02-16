import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../libs";
import { CategoryEntity } from "../../category";

export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  productName!: string;

  @IsNotEmpty()
  description!: string;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  category!: CategoryEntity;
}
