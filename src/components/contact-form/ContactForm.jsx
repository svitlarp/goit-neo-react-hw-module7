import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required(),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required(),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    if (values.name.trim() === "" || values.number.trim() === "") {
      alert("Please fill in both Name and Number");
      return;
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
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberId}>Number</label>
        <Field type="tel" name="number" id={numberId} />
        <ErrorMessage name="number" component="span" />

        <button className={css.contactFormBtn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
