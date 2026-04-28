import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';
//import { LostItem } from '../../lost-items/lost-item.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ length: 50, default: 'student' })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

 // @OneToMany(() => LostItem, (lostItem) => lostItem.user)
  //lostItems: LostItem[];
}
