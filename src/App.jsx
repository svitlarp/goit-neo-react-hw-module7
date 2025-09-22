import { useEffect } from "react";
import ContactForm from "./components/contact-form/ContactForm";
import ContactList from "./components/contact-list/ContactList";
import SearchBox from "./components/search-box/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
