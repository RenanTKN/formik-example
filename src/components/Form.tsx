import React from "react";
import { withFormik } from "formik";
import * as yup from "yup";

const Form = (props: any) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Formik</h1>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          name="name"
          placeholder="Name"
        />
        {errors.name && touched.name && <div>{errors.name}</div>}
        <input
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name="email"
          placeholder="Email"
        />
        {errors.email && touched.email && <div>{errors.email}</div>}
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.website}
          name="website"
          placeholder="Website"
        />
        {errors.website && touched.website && <div>{errors.website}</div>}
        <input
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          name="age"
          placeholder="Age"
        />
        {errors.age && touched.age && <div>{errors.age}</div>}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  email: yup.string().email(),
  website: yup.string().url(),
  age: yup.number().required().positive().integer().max(200),
});

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ name: "", email: "", website: "", age: "" }),
  validationSchema: formSchema,
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));

      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(Form);

export default MyEnhancedForm;
