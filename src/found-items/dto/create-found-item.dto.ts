import { IsString, IsNotEmpty, IsOptional, IsDateString, IsUrl } from 'class-validator';

export class CreateFoundItemDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsDateString()
  @IsNotEmpty()
  dateFound!: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}