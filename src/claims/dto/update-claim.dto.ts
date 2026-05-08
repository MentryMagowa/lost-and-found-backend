import { PartialType } from '@nestjs/mapped-types';
import { CreateClaimDto } from './create-claim.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClaimDto extends PartialType(CreateClaimDto) {
    @IsOptional()
    @IsString()
      status?: string;
}
