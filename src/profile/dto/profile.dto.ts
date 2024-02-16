import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../libs";

export class ProfileDTO extends BaseDTO {
    @IsNotEmpty()
    name!: string;
    
    @IsNotEmpty()
    age!: string;
    
    @IsNotEmpty()
    breed!: string;
    
    @IsNotEmpty()
    weight!: string;
    
    @IsNotEmpty()
    temperment!: string;
    
    @IsNotEmpty()
    specialNeeds!: string;
    
    @IsNotEmpty()
    lastVaccinated!: string;

    @IsNotEmpty()
    userId!: string;
}
