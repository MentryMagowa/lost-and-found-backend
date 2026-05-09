import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFoundItemDto {
  @IsString()
  @IsNotEmpty()
  itemName: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  dateFound: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
