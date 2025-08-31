import { useState } from 'react';
import './App.css';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import initialContactList from './contactList.json';
import SearchBox from './search-box/SearchBox';


function App() {
  const [contacts, setContacts] = useState(initialContactList);

  const addContact = (newContact) => {
    setContacts(newContact);
  }

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList contactList={contacts} />
    </>
  )
}

export default App

// import initialTasks from './tasks.json';