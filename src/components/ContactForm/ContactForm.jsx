import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onNewContact }) {
  const nameId = useId();
  const phoneId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name is too short")
      .max(50, "Name is too long"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number is too short")
      .max(50, "Number is too long"),
  });

  function onSubmit({ name, number }, { resetForm }) {
    onNewContact({ name, number, id: "id-" + Date.now() });
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.contactForm}>
        <label htmlFor={nameId}>Name</label>
        <Field name="name" id={nameId} type="text"></Field>
        <ErrorMessage name="name">
          {(msg) => <div className={styles.error}>{msg}</div>}
        </ErrorMessage>
        <label htmlFor={phoneId}>Phone</label>
        <Field name="number" id={phoneId} type="phone"></Field>
        <ErrorMessage name="number">
          {(msg) => <div className={styles.error}>{msg}</div>}
        </ErrorMessage>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
