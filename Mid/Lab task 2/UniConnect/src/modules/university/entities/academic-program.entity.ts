import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'academic_programs' })
export class AcademicProgram {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: 'degree_level' })
  degreeLevel!: string;
}
