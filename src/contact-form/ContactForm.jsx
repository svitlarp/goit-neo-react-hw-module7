import { useId } from "react";
import css from './ContactForm.module.css';


const ContactForm = ({onAdd}) => {
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(evt.target.elements);
        console.dir(evt.target);

        const { name, number } = evt.target.elements;
        console.log(name.value, number.value);

        onAdd({
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
        })
        evt.target.reset();
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



       