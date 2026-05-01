import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Claim } from '../../claims/entities/claims.entity';

@Entity('found_items')
export class FoundItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  itemName: string;

  @Column({ length: 100 })
  category: string;

  @Column({ type: 'clob', nullable: true })
  description: string;

  @Column({ length: 255 })
  location: string;

  @Column({ type: 'date' })
  dateFound: Date;

  @Column({ length: 50, default: 'pending' })
  status: string;

  @Column({ length: 500, nullable: true })
  imageUrl?: string;

  @Column({ length: 255, nullable: true })
  foundBy?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: true })
  userId: number;

  @OneToMany(() => Claim, (claim) => claim.foundItem)
  claims: Claim[];
}
