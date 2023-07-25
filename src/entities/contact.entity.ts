import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Email } from "./email.entity";
import { Phone } from "./phone.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;

  @OneToMany(() => Email, (email) => email.contact)
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.contact)
  phones: Phone[];
}

export { Contact };
