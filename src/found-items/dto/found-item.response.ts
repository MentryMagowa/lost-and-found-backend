import { Exclude } from 'class-transformer';

export class FoundItemResponseDto {
  id!: number;
  itemName!: string;
  description!: string;
  location!: string;
  dateFound!: Date;
  status!: string;
  category!: string;
  foundBy!: string;
  createdAt!: Date;
  updatedAt!: Date;

  @Exclude()
  deletedAt?: Date;
}
