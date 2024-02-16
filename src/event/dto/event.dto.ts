import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../libs";

export class EventDTO extends BaseDTO {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  desc!: string;

  @IsNotEmpty()
  imageURL!: string;

  @IsNotEmpty()
  eventURL!: string;

  @IsNotEmpty()
  startDate!: string;

  @IsNotEmpty()
  eventDate!: string;

  @IsNotEmpty()
  userId!: string;
}