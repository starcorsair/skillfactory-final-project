import React from 'react'
import classes from './FormSubmit.module.css'

const FormSubmit = ({isValid, dirty, name}) => {
  return (
    <button disabled={!isValid && !dirty} type="submit" className={classes.form_submit}>{name}</button>
  )
}

export default FormSubmit