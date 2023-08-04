import React from "react";
import Officers from "../Officers/Officers";
import Reports from "../Reports/Reports";
import classes from "./Page.module.css";

function Page() {
  return (
    <div className={classes.app}>
      <header>
        <h1>Прокатитесь на наших велосипедах!</h1>
        <nav className={classes.nav_panel}>
          <ul className={classes.list_page}>
            <li>
              <Link to="/registration" className={classes.link_page}>
                Регистрация
              </Link>
            </li>
            <li>
              <Link to="/login" className={classes.link_page}>
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.picture}></div>
      <main className={classes.main}>
        <p className={classes.text_main}>
          Ищете способ провести время на свежем воздухе? Тогда прокат
          велосипедов - это то, что вам нужно! Наши велосипеды в отличном
          состоянии, а наши цены доступны каждому.
        </p>
        <p className={classes.text_main}>
          Не упустите возможность прокатиться на наших велосипедах! Забронируйте
          свой велосипед уже сегодня и получите незабываемые впечатления от
          катания на свежем воздухе
        </p>
        <div className={classes.forms_main}>
          <h3 className={classes.head_text}>Произошла кража велосипеда?</h3>
          <Link to="/report" className={classes.link_main}>
            Напишите нам:
          </Link>

          <h3 className={classes.head_text}>Хотите присоеденитьсч к нам?</h3>
          <Link to="/registration" className={classes.link_main}>
            Зарегистрируйтесь!
          </Link>
        </div>
        <Officers />
        <Reports />
      </main>
    </div>
  );
}

export default Page;
