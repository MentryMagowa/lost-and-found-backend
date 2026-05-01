import { Exclude } from 'class-transformer';

export class LostItemResponseDto {
  id: number;
  itemName: string;
  description: string;
  location: string;
  dateLost: string;
  status: string;
  category: string;
  reportedBy: string;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  deletedAt?: Date;
}
