import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../libs";

export class FavoriteDTO extends BaseDTO {
    @IsNotEmpty()
    productId!: string;

    @IsNotEmpty()
    customerId!: string;
}