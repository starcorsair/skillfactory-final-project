import React from "react";
import classes from "./Authentification.module.css";

function Authentification() {
  return (
    <section>
      <div className={classes.signin}>
        <div className={classes.content}>
          <h2>Sign In</h2>

          <div className={classes.form}>
            <div className={classes.inputBox}>
              <input type="text" required /> <i>First name</i>
            </div>

            <div className={classes.inputBox}>
              <input type="text" required /> <i>Last name</i>
            </div>

            <div className={classes.inputBox}>
              <input type="text" required /> <i>Username</i>
            </div>

            <div className={classes.inputBox}>
              <input type="email" required /> <i>E-mail</i>
            </div>
            <div className={classes.inputBox}>
              <input type="password" required /> <i>Password</i>
            </div>

            <div className={classes.links}>
              {" "}
              <a href="#">Forgot Password</a> <a href="#">Sign Up</a>
            </div>

            <div className={classes.inputBox}>
              <input type="submit" value="Log In" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Authentification;
