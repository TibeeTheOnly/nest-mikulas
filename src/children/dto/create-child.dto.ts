import { IsBoolean, IsBooleanString, IsString } from "class-validator";

export class CreateChildDto {
  @IsString()
  name: string;
  @IsString()
  address: string;
  @IsBoolean()
  hasBeenGood: boolean;
}
