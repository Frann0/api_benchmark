import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

@Entity('WriteTest')
export class WriteTest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}