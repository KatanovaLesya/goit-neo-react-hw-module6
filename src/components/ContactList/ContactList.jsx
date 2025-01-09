import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
