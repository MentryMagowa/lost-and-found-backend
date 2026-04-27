import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('found-items')
export class FoundItem {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar2', length: 255 })
  title!: string;

  @Column({ type: 'clob', nullable: true })
  description!: string;

  @Column({ type: 'varchar2', length: 255 })
  location!: string;

  @Column({ type: 'date', name: 'dateFound' })
  dateFound!: Date;

  @Column({ type: 'varchar2', length: 50, default: 'pending' })
  status!: string;

  @Column({ type: 'varchar2', length: 500, nullable: true })
  imageUrl!: string | null;   // 👈 explicitly allow null

  @CreateDateColumn({ type: 'date', name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'date', name: 'updatedAt' })
  updatedAt!: Date;
}