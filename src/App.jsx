import { useState } from 'react';
import './App.css';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import initialContactList from './contactList.json';
import SearchBox from './search-box/SearchBox';


function App() {
  const [contacts, setContacts] = useState(initialContactList);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    });
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <>
      <h1>PhoneBook</h1>
      <p>{filter}</p>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  )
}

export default App
