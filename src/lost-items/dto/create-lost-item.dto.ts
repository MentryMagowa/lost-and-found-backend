import { IsString, IsNotEmpty, IsDate, IsEnum, IsNumber, IsOptional } from 'class-validator';
import {Type} from 'class-transformer';
export class CreateLostItemDto {
  @IsString()
  @IsNotEmpty()
  itemName: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  dateLost: Date;

  @IsString()
  @IsNotEmpty()
  category: string;

  // @IsEnum(['lost', 'recovered'])
  @IsOptional()
  status?: string;

  @IsString()
  @IsNotEmpty()
  reportedBy: string;
}