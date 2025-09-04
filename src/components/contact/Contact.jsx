import css from './Contact.module.css';

const Contact = ({data: {id, name, number}, onDelete}) => {
    return (
        <div className={css.contactFrame}>
            <div className={css.contact}>
                <p>{name}</p>
                <p>{number}</p>
            </div>

            <div className={css.contactBtn}>
                <button type="button" className={css.contactListDeleteBtn} onClick={() => {onDelete(id)}}>Delete</button>
            </div>
            
        </div>
    )
}

export default Contact;