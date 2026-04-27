import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateClaimDto {
  @IsNumber()
  userId!: number;

  @IsNumber()
  foundItemId!: number;

  @IsString()
  @IsOptional()
  verificationNote!: string;
}
