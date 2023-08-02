import React from "react";
import classes from "./Page.module.css";

function Page() {
  return (
    <div className={classes.app}>
      <header>
        <h1>Rent our bicycles!</h1>
        <nav className={classes.nav_panel}>
          <ul className={classes.list_page}>
            <li>
              <a className={classes.link_page} href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className={classes.link_page} href="#">
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.picture}></div>
      <main className={classes.main}>
        <p className={classes.text_main}>
          Looking for a way to spend time into fresh air? Then bike rental is
          what you need! Our bikes are in excellent condition and our prices are
          affordable for everyone!
        </p>
        <p className={classes.text_main}>
          Don't miss the opportunity to ride our bikes! Book your bike today for
          the ultimate fresh air riding experience!
        </p>
        <div className={classes.forms_main}>
          <h3>Do you have a problem with a missing bike?</h3>
          <p>Write to us:</p>
          <p>тут должен быть репорт</p>
          <h3>Do you want to join our team?</h3>
          <p>Sign up!</p>
          <p>тут должена быть форма аутентификации</p>
        </div>
      </main>
      {/*  <footer className={classes.footer}>
        <nav className={classes.nav_panel_footer}>
          <h3>Contacts</h3>
          <ul>
            <li>
              <a href="#">some@email</a>
            </li>
            <li>
              <a>some adress</a>
            </li>
          </ul>
        </nav>
  </footer>*/}
    </div>
  );
}

export default Page;
