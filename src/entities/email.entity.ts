import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Contact } from "./contact.entity";

@Entity("emails")
class Email {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  address: string;

  //   @ManyToOne(() => User, (user) => user.emails)
  //   user: User;

  @ManyToOne(() => Contact, (contact) => contact.emails)
  contact: Contact;
}

export { Email };
