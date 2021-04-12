import React from "react";
import { FormikProps, withFormik } from "formik";
import * as yup from "yup";

import * as Styled from "./Form.styled";

interface FormValues {
  name: string;
  email: string;
  website: string;
  age: number | null;
}

const Form: React.FC<FormikProps<FormValues>> = (props: any) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <Styled.Container>
      <form onSubmit={handleSubmit}>
        <Styled.FormFields>
          <h1>Formik</h1>
          <Styled.InputContainer>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              placeholder="Name"
            />
          </Styled.InputContainer>
          {errors.name && touched.name && <div>{errors.name}</div>}
          <Styled.InputContainer>
            <input
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
              placeholder="Email"
            />
          </Styled.InputContainer>
          {errors.email && touched.email && <div>{errors.email}</div>}
          <Styled.InputContainer>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.website}
              name="website"
              placeholder="Website"
            />
          </Styled.InputContainer>
          {errors.website && touched.website && <div>{errors.website}</div>}
          <Styled.InputContainer>
            <input
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              name="age"
              placeholder="Age"
            />
          </Styled.InputContainer>
          {errors.age && touched.age && <div>{errors.age}</div>}
          <Styled.Button type="submit">Submit</Styled.Button>
        </Styled.FormFields>
      </form>
    </Styled.Container>
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

const MyEnhancedForm = withFormik<{}, FormValues>({
  mapPropsToValues: () => ({ name: "", email: "", website: "", age: null }),
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
