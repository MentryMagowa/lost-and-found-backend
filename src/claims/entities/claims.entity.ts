import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'CLAIMS' })
export class Claim {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id!: number;

  @CreateDateColumn({ name: 'CLAIM_DATE' })
  claimDate!: Date;

  @Column({ name: 'STATUS', default: 'pending' })
  status!: string;

  @Column({ name: 'VERIFICATION_NOTE', nullable: true })
  verificationNote?: string;

  @Column({ name: 'USER_ID' })
  userId!: number;

  @Column({ name: 'FOUND_ITEM_ID' })
  foundItemId!: number;

  @UpdateDateColumn({ name: 'UPDATED_AT' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'DELETED_AT', nullable: true })
  deletedAt?: Date;
}
