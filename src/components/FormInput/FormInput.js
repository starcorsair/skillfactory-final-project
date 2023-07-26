import React from 'react';
import { Field } from 'formik';
import classes from './FormInput.module.css';

const FormInput = ({placeholder, name, onBlur, onChange, values, touched, errors, type}) => {
    return (
      <div className={classes.wrapper}>
        <Field type={type} onBlur={onBlur} onChange={onChange} name={name} value={!values[`${name}`] ? '' : values[`${name}`]} placeholder={placeholder} className={classes.formInput}/>
        {touched[`${name}`] && errors[`${name}`] && <p className={classes.error}>{errors[`${name}`]}</p>}
      </div>
    )
  }
  
  export default FormInput