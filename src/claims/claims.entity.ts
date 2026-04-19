import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('claims')
export class Claim {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  claimDate!: Date;

  @Column({ default: 'pending' })
  status!: string; // e.g., 'pending', 'approved', 'rejected'

  @Column({ nullable: true })
  verificationNote!: string;

  @Column()
  userId!: number; // Placeholder until Person 2 creates their entity

  @Column()
  foundItemId!: number; // Placeholder until Person 4 creates their entity
}
