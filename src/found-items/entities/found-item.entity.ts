import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
