import { Column, CreateDateColumn,Entity, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm";
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  fullName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  age!: number;

  @Column()
  phone!: string;

  @Column()
  accountType!: string;

  @Column({ nullable: true })
  address?: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at?: Date;
}
