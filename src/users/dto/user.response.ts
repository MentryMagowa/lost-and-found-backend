import { Exclude } from 'class-transformer';

export class UserResponseDto {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  deletedAt?: Date;
}
