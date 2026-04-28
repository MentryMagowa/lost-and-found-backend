import { IsString, IsNotEmpty, IsDateString, IsEnum, IsNumber, IsOptional } from 'class-validator';

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

  @IsDateString()
  @IsNotEmpty()
  dateLost: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsEnum(['lost', 'recovered'])
  @IsOptional()
  status?: string;

  @IsNumber()
  @IsNotEmpty()
  reportedById: number;
}