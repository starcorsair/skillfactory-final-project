import React from "react";
import {Link} from 'react-router-dom';
import classes from './Header.module.css'

function Header() {
 return(
    <div className={classes.header}>
     <Link to='/' className={classes.link}>
        <img src='../../images/logo.svg' width={150} height={75} className={classes.logo}/>
        </Link>
        <div className={classes.nav}>
         <Link to='/login' className={classes.header_link}>
    Войти
         </Link>
         <Link to='/registration' className={classes.header_link}>
 Зарегистрироваться
         </Link>
         <Link to='/report' className={classes.header_link}>
Сообщить о краже
         </Link>
         </div>
    </div>
 )
}

export default Header;