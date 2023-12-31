import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";

const deleteContactService = async (contactId: string): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  await contactRepository.remove(contact!);
};

export default deleteContactService;
