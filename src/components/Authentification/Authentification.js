import React from 'react'
import Form from '../Form/Form'
import { 
  loginFields, 
  loginFormValues, 
  loginValidation, 
  registerFields, 
  registerFormValues, 
  registerValidation } from '../Form/FormConsts.js'
import { useDispatch } from 'react-redux'
import { fetchLogin, fetchRegister } from '../Utilities/userSlice'
import { setToken } from '../Utilities/tokens'
import classes from './Authentification.module.css'

const Authentification = ({type}) => {

    const dispatch = useDispatch();

    const [processMessage, setProcessMessage] = React.useState(null);

    const onLoginHandler = async (values) => {
        dispatch(fetchLogin(values))
        .then((data) => {
          if('error' in data){
            setProcessMessage('Введены неверные данные');
          }else{
            setProcessMessage('Вы успешно авторизованы');
            setToken(data.payload.data.token)
          }
        })
        .catch(() => {
            setProcessMessage('Ошибка работы сервера');
        })
    };

    const onRegisterHandler = async (values) => {
        dispatch(fetchRegister(values))
        .then((data) => {
          if('error' in data){
            setProcessMessage('Пользователь уже зарегистрирован');
          }else{
            setProcessMessage('Вы успешно зарегистрированы, перенаправляем на вход...');
    
            setTimeout(() => {
              window.location.href = '/login'
            }, 2000)
          }
        })
        .catch(() => {
            setProcessMessage('Ошибка работы сервера');
        })
    };

  return (
    <section className={classes.auth}>
        {
        type === 'registration'
        ?
        <Form 
          fields={registerFields}
          formValues={registerFormValues} 
          validation={registerValidation} 
          onSubmit={onRegisterHandler} 
          submitName="Зарегистрироваться"
          formName="Регистрация"
          processMessage={processMessage}
        />
        :
        type === 'login'
        ?
        <Form 
          fields={loginFields} 
          formValues={loginFormValues} 
          validation={loginValidation} 
          onSubmit={onLoginHandler} 
          submitName="Вход"
          formName="Войти"
          processMessage={processMessage}
        />
        :
        null
        }
    </section>
  )
}

export default Authentification