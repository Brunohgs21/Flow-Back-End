import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contact.entity";
// import { Email } from "./email.entity";
// import { Phone } from "./phone.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.user, { cascade: ["insert"] }) // Add cascade option here
  contacts: Contact[];
  // @OneToMany(() => Email, (email) => email.user)
  // emails: Email[];

  // @OneToMany(() => Phone, (phone) => phone.user)
  // phones: Phone[];
}

export { User };
