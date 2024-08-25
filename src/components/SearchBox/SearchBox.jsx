import { Formik, Form, Field } from "formik";
import { useId, useState } from "react";

export default function SearchBox({ onSearch }) {
  const filterId = useId();

  return (
    <div>
      <Formik initialValues={{ filter: "" }}>
        {() => (
          <Form onChange={(e) => onSearch(e.target.value)}>
            <label htmlFor={filterId}>Find contacts by name: </label>
            <Field name="filter" id={filterId} type="text" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
