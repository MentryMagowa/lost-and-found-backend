import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../users/entities/user.entity';

@Entity('lost_items')
export class LostItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  itemName: string;

  @Column({ type: 'clob' })
  description: string;

  @Column({ length: 255 })
  location: string;

  @Column({ length: 255 })
  dateLost: string;

  @Column({ length: 100 })
  category: string;

  @Column({ length: 50, default: 'pending' })
  status: string;

  @Column({ length: 255, nullable: true })
  reportedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.lostItems)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: true })
  userId: number;
}
