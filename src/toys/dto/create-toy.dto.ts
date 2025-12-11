import { IsNumber, IsString } from "class-validator";
import { IsValidMaterial } from "../../validators/is-valid-material.validator";

export class CreateToyDto {
  @IsString()
  name: string;
  @IsString()
  @IsValidMaterial()
  material: string
  @IsNumber()
  weight: number;
}

