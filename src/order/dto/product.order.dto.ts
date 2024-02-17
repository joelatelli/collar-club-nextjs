import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../../libs";
import { OrderEntity } from "../entities";
import { ProductEntity } from "../../product";

export class ProductOrderDTO extends BaseDTO {

  @IsNotEmpty()
  quantity!: number;

  @IsNotEmpty()
  totalPrice!: number;

  @IsNotEmpty()
  size!: string;

  @IsNotEmpty()
  productId!: string
  
}
