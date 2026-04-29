import { IsString, IsOptional, IsDateString, IsEnum, IsNumber } from 'class-validator';

export class UpdateLostItemDto {
  @IsString()
  @IsOptional()
  itemName?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsDateString()
  @IsOptional()
  dateLost?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsEnum(['lost', 'recovered'])
  @IsOptional()
  status?: string;

  @IsNumber()
  @IsOptional()
  reportedById?: number;
}
