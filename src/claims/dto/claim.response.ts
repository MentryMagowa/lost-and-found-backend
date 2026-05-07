import { Exclude } from 'class-transformer';

export class ClaimResponseDto {
  id?: number;
  lostItemId?: number;
  userId?: number;
  status?: string;
  claimDate?: Date;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;

  @Exclude()
  deletedAt?: Date;
}
