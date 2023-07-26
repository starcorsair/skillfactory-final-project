import React from "react";
/*import { Formik, Form as FormikForm } from "formik";*/
import FormInput from "../FormInput/FormInput";
import FormSubmit from "../FormSubmit/FormSubmit";
import Header from "../Header/Header";
import classes from "./Forms.module.css";

const Forms = ({
  isValided,
  isDirty,
  children,
  fields,
  formValues,
  validation,
  onSubmit,
  submitName,
  formName,
  processMessage,
}) => {
  return (
    <div className={classes.form_content}>
      <Header />
      <Formik
        initialValues={formValues}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validation={validation}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid = isValided,
          dirty = isDirty,
        }) => (
          <FormikForm className={classes.form}>
            <div className={classes.formName}>{formName}</div>
            {fields.map((el) => (
              <FormInput
                placeholder={el.label}
                name={el.name}
                type={el.type}
                values={values}
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched}
                errors={errors}
                key={el.id}
              />
            ))}
            {children}
            <FormSubmit isValid={isValid} dirty={dirty} name={submitName} />
          </FormikForm>
        )}
      </Formik>
      {processMessage && (
        <p className={classes.process_message}>{processMessage}</p>
      )}
    </div>
  );
};

export default Forms;
