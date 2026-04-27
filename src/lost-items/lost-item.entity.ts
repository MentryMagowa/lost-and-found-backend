import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('lost_items')
export class LostItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  itemName: string;

  @Column('text')
  description: string;

  @Column({ length: 200 })
  location: string;

  @Column('date')
  dateLost: Date;

  @Column({ length: 50 })
  category: string;

  @Column({ type: 'enum', enum: ['lost', 'recovered'], default: 'lost' })
  status: string;

  @Column()
  reportedById: number;

  @ManyToOne(() => User, (user) => user.lostItems, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reportedById' })
  reportedBy: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}