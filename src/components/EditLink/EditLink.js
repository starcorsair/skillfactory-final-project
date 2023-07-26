import React from 'react'
import {Link} from 'react-router-dom';
import classes from './EditLink.module.css';

const EditLink = ({href}) => {
  return (
    <Link to href={href} className={classes.edit_link}>Редактировать</Link>
  )
}

export default EditLink