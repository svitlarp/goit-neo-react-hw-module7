import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactFrame}>
      <div className={css.contact}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <div className={css.contactBtn}>
        <button
          type="button"
          className={css.contactListDeleteBtn}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
