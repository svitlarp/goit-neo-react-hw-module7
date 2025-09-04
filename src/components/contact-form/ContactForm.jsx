import { useId } from "react";
import css from './ContactForm.module.css';
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required(),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required()
})

const initialValues = {
                name: "",
                number: "",
            }

const ContactForm = ({onAdd}) => {
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, actions) => {


        if (values.name.trim() === "" || values.number.trim() === "") {
            alert("Please fill in both Name and Number");
        }
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    };


    return (
        <Formik
            className={css.contactForm}
            initialValues={initialValues}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}>
            <Form>
                <label htmlFor={nameId}>Name</label>
                <Field type="text" name="name" id={nameId} />
                <ErrorMessage name="name" component="span" />

                <label htmlFor={numberId}>Number</label>
                <Field type="tel" name="number" id={numberId} />
                <ErrorMessage name="number" component="span" />

                <button className={css.contactFormBtn} type="submit">Add Contact</button>
            </Form>
        </Formik>
    )
}


export default ContactForm;



// const handleSubmit = (evt) => {

//         const { name, number } = evt.target.elements;

//         if (name.value === "" || number.value === "") {
//             alert("Please fill in both Name and Number");
//         } else {
//             onAdd({
//                 id: nanoid(),
//                 name: name.value,
//                 number: number.value,
//             });
//             evt.target.reset();
//         }
//     };

// return (
//         <form className={css.contactForm} onSubmit={handleSubmit}>
//             <label htmlFor={nameId}>Name</label>
//             <input type="text" name="name" id={nameId}></input>

//             <label htmlFor={numberId}>Number</label>
//             <input type="tel" name="number" id={numberId}></input>

//             <button className={css.contactFormBtn} type="submit">Add Contact</button>
            
//         </form>
//     )

       