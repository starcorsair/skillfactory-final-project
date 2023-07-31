import React from "react";
import classes from "./Page.module.css";

function Page() {
  return (
    <div className={classes.app}>
      <header>
        <h1>Rent our bicycles!</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.picture}></div>
      <main className={classes.main}>
        <p>Our bicycles are the best!</p>
      </main>
      <footer>
        <nav>
          <h2>Contacts</h2>
          <ul>
            <li>
              <a href="#">some@email</a>
            </li>
            <li>
              <a>some adress</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Page;
