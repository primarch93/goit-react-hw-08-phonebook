import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from './redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section';
import { AddContactForm } from './components/AddContactForm/AddContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { ContactFilter } from './components/ContactFilter/ContactFilter';
import { Container, Title } from './components/Section/Section.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller.signal));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>

      {contacts.length > 0 && (
        <Container>
          <Title
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: '20px',
              margin: '0 auto',
              justifyContent: 'end',
              alignItems: 'baseline',
            }}
          >
            Contacts
            <ContactFilter />
          </Title>
          <ContactList contacts={contacts} />
        </Container>
      )}

      <ToastContainer newestOnTop={true} autoClose={3000} />
    </Layout>
  );
};
