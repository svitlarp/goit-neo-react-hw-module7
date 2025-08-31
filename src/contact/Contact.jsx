import css from './Contact.module.css';

const Contact = ({data}) => {
    return (
        <div className={css.contactFrame}>
            <div className={css.contact}>
                <p>{data.name}</p>
                <p>{data.number}</p>
            </div>

            <div className={css.contactBtn}>
                <button type="button" className={css.contactListDeleteBtn}>Delete</button>
            </div>
            
        </div>
    )
}

export default Contact;