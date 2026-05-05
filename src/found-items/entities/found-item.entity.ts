import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('found_items')
export class FoundItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'itemName' })
  itemName!: string;

  @Column({ name: 'category' })
  category!: string;

  @Column({ name: 'description'})
  description!: string;

  @Column({ name: 'location'})
  location!: string;

  @Column({ name: 'dateFound'})
  dateFound!: Date;

  @Column({ name: 'status',nullable: true, default: 'pending' })
  status!: string;

  @Column({ name: 'imageUrl', nullable: true })
  imageUrl?: string;

  @Column({ name: 'foundBy', nullable: true  })
  foundBy?: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt?: Date;
}
