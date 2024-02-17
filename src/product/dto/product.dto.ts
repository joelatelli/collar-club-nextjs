import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../libs";
import { CategoryEntity } from "../../category";

export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  desc!: string;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  imageURL!: string;
}
