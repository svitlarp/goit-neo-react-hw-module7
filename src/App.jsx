import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/contact-form/ContactForm.jsx';
import ContactList from './components/contact-list/ContactList.jsx';
import SearchBox from './components/search-box/SearchBox.jsx';
import initialContactList from './contactList.json';



function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : initialContactList;
  })
  const [filter, setFilter] = useState("");

  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);

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
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  )
}

export default App
