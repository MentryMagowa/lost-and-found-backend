import { IsString, IsNotEmpty, IsOptional,IsDateString } from 'class-validator';

export class CreateFoundItemDto {
  @IsString()
  @IsNotEmpty()
  itemName?: string;

  @IsString()
  @IsNotEmpty()
  category?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsString()
  @IsNotEmpty()
  location?: string;

  @IsDateString()
  @IsNotEmpty()
  dateFound!: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
