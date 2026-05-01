import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

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
}
