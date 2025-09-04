import { useId } from "react";
import css from './ContactForm.module.css';
import { nanoid } from "nanoid";


const ContactForm = ({onAdd}) => {
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const { name, number } = evt.target.elements;

        if (name.value === "" || number.value === "") {
            alert("Please fill in both Name and Number");
        } else {
            onAdd({
                id: nanoid(),
                name: name.value,
                number: number.value,
            });
            evt.target.reset();
        }
    };


    return (
        <form className={css.contactForm} onSubmit={handleSubmit}>
            <label htmlFor={nameId}>Name</label>
            <input type="text" name="name" id={nameId}></input>

            <label htmlFor={numberId}>Number</label>
            <input type="tel" name="number" id={numberId}></input>

            <button className={css.contactFormBtn} type="submit">Add Contact</button>
            
        </form>
    )
}


export default ContactForm;



       