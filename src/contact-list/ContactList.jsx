import Contact from "../contact/Contact";
import css from "./ContactList.module.css";


const ContactList = ({contactList}) => {
    return (
        <ul className={css.contactList}>
            {contactList.map((contact) => (
                <li key={contact.id}>
                        <Contact data={contact} />
                </li>
                ))}
        </ul>
    );
}

export default ContactList;

