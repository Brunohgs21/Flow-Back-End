import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./user.entity";
// import { Email } from "./email.entity";
// import { Phone } from "./phone.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
  user: User;

  @Column()
  email: string;
  @Column()
  phone: string;

  // @OneToMany(() => Email, (email) => email.contact, { cascade: ["insert"] }) // Add cascade option here
  // emails: Email[];

  // @OneToMany(() => Phone, (phone) => phone.contact, { cascade: ["insert"] }) // Add cascade option here
  // phones: Phone[];
}

export { Contact };
