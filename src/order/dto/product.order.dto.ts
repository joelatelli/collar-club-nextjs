import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../../libs";
import { OrderEntity } from "../entities";
import { ProductEntity } from "../../product";

export class ProductOrderDTO extends BaseDTO {
  @IsNotEmpty()
  quantityProduct!: number;

  @IsOptional()
  totalPrice?: number;

  @IsOptional()
  order?: OrderEntity;

  @IsOptional()
  product?: ProductEntity;
}
