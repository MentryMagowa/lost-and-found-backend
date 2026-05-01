import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { FoundItem } from '../../found-items/entities/found-item.entity';

@Entity({ name: 'CLAIMS' })
export class Claim {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @CreateDateColumn({ name: 'CLAIM_DATE' })
  claimDate: Date;

  @Column({ name: 'STATUS', default: 'pending' })
  status: string;

  @Column({ name: 'VERIFICATION_NOTE', nullable: true })
  verificationNote?: string;

  @Column({ name: 'USER_ID' })
  userId: number;

  @Column({ name: 'FOUND_ITEM_ID' })
  foundItemId: number;

  @UpdateDateColumn({ name: 'UPDATED_AT' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'DELETED_AT', nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.claims)
  @JoinColumn({ name: 'USER_ID' })
  user: User;

  @ManyToOne(() => FoundItem, (foundItem) => foundItem.claims)
  @JoinColumn({ name: 'FOUND_ITEM_ID' })
  foundItem: FoundItem;
}
