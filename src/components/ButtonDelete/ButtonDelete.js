import React from 'react'
import classes from './ButtonDelete.module.css'

const ButtonDelete = ({removeFunction, id, redirectTo, setErrorMessage}) => {

    const onClickHandler = () => {
        removeFunction(id)
        .then(() => window.location.pathname = `${redirectTo}`)
        .catch(() => setErrorMessage('Не удалось удалить сообщение'))
    }

  return (
    <button className={classes.button_delete} onClick={onClickHandler}>
        Удалить
    </button>
  )
}

export default ButtonDelete