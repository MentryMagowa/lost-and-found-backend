import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('lost_items')
export class LostItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  dateLost: string;

  @Column({ default: 'pending' })
  status: string;

  @Column({ nullable: true })
  reportedBy: string;

  @CreateDateColumn()
  createdAt: Date;
}
