import { IsNotEmpty } from "class-validator";
import { CustomerEntity } from "../../customer";
import { BaseDTO } from "../../libs";
import { ProductOrderDTO } from "./product.order.dto";

export class OrderDTO extends BaseDTO {
  @IsNotEmpty()
  status!: string;

  @IsNotEmpty()
  paymentMethod!: string;

  @IsNotEmpty()
  customerId!: string;

  @IsNotEmpty()
  products!: [ProductOrderDTO]
}
