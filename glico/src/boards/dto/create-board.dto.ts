/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateBoardDto {

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}