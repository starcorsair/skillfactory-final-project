import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.nav}>
        <Link to="/" className={classes.header_link}>
          На главную
        </Link>
        <Link to="/login" className={classes.header_link}>
          Войти
        </Link>
        <Link to="/registration" className={classes.header_link}>
          Зарегистрироваться
        </Link>
        <Link to="/report" className={classes.header_link}>
          Сообщить о краже
        </Link>
      </div>
    </div>
  );
}

export default Header;
