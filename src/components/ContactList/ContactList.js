import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterValue,
} from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import { ContactItem } from '../ContactItem/ContactItem';
import { Table, TableHead } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(selectFilterValue);
  const contacts = useSelector(selectContacts);

  const handleFilterContact = () => {
    const noFilteredContacts =
      contacts.filter(contact => {
        return (
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.number.includes(filter.trim())
        );
      }).length === 0;
    if (filter && noFilteredContacts) {
      toast.error(
        <p>
          Sorry, there are no contact matching
          <span style={{ color: 'red' }}> {filter}</span>!
        </p>,
        {
          toastId: 'dont-duplicate-pls',
        }
      );
    }

    return contacts
      .filter(contact => {
        return (
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.number.includes(filter.trim())
        );
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  };

  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>
            {contacts.length}
            <span> {contacts.length === 1 ? 'contact' : 'contacts'}</span>
          </TableHead>
        </tr>
      </thead>
      <tbody>
        <ContactItem contacts={handleFilterContact()} />
      </tbody>
    </Table>
  );
};
