import { useState } from 'react';
import './App.css';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import initialContactList from './contactList.json';
import SearchBox from './search-box/SearchBox';


function App() {
  const [contacts, setContacts] = useState(initialContactList);

  const addContact = (newContact) => {
    // setContacts([...contacts, newContact]);
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    });
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  // const visibleTask = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </>
  )
}

export default App

// import initialTasks from './tasks.json';