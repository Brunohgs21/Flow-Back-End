import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contact.entity";
import { contactSchemaResponse } from "../../schemas/contacts.schema";
import { TContactResponse } from "../../interfaces/contacts/contacts.interfaces";
// import { Email } from "../../entities/email.entity";
// import { Phone } from "../../entities/phone.entity";

// const createContactService = async (contactData: any, userId: string) => {
//   // Verifica se o usuário com o userId existe
//   const userRepository = AppDataSource.getRepository(User);
//   const findUser = await userRepository.findOne({
//     where: {
//       id: userId,
//     },
//   });
//   if (!findUser) {
//     throw new Error("Usuário não encontrado");
//   }

//   // Cria uma nova instância de Contact
//   const contact = new Contact();
//   contact.name = contactData.name;
//   contact.user = findUser;

//   // Verifica e salva os emails associados ao contato
//   if (contactData.emails) {
//     const emailRepository = AppDataSource.getRepository(Email);
//     const emailAddresses = Array.isArray(contactData.emails)
//       ? contactData.emails
//       : [contactData.emails];
//     const emailEntities = emailAddresses.map((emailAddress: string) => {
//       const email = new Email();
//       email.address = emailAddress;
//       email.contact = contact;
//       return email;
//     });
//     contact.emails = emailEntities;
//     await emailRepository.save(emailEntities);
//   }

//   // Verifica e salva os phones associados ao contato
//   if (contactData.phones) {
//     const phoneRepository = AppDataSource.getRepository(Phone);
//     const phoneNumbers = Array.isArray(contactData.phones)
//       ? contactData.phones
//       : [contactData.phones];
//     const phoneEntities = phoneNumbers.map((phoneNumber: string) => {
//       const phone = new Phone();
//       phone.number = phoneNumber;
//       phone.contact = contact;
//       return phone;
//     });
//     contact.phones = phoneEntities;
//     await phoneRepository.save(phoneEntities);
//   }

//   // Salva o contato e retorna o contato salvo
//   const contactRepository = AppDataSource.getRepository(Contact);
//   const savedContact = await contactRepository.save(contact);

//   return savedContact;
// };

// export default createContactService;
const createContactService = async (
  contactData: any,
  userId: string
): Promise<TContactResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!findUser) {
    throw new Error("Usuário não encontrado");
  }

  const contact = new Contact();
  contact.name = contactData.name;
  contact.email = contactData.email;
  contact.phone = contactData.phone;
  contact.user = findUser;

  const contactRepository = AppDataSource.getRepository(Contact);
  const savedContact = await contactRepository.save(contact);

  return contactSchemaResponse.parse(savedContact);
};

export default createContactService;
