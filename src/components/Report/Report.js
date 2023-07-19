import React from "react";
import classes from "./Report.module.css";

function Report() {
  return (
    <section>
      <div className={classes.repotfield}>
        <div className={classes.content}>
          <h2>Your report</h2>

          <div className={classes.form}>
            <div className={classes.inputBox}>
              <input type="string" required /> <i>Status</i>
            </div>

            <div className={classes.inputBox}>
              <input type="string" required /> <i>License number</i>
            </div>

            <div className={classes.inputBox}>
              <input type="string" required /> <i>Bike type</i>
            </div>

            <div className={classes.inputBox}>
              <input type="string" required /> <i>Full name</i>
            </div>

            <div className={classes.inputBox}>
              <input type="string" required /> <i>ID</i>
            </div>

            <div className={classes.inputBox}>
              <input type="date" required />
            </div>

            {/* <div className={classes.inputBox}>
              <input type="date" /> <i>Last update date</i>
            </div> 

            <div className={classes.inputBox}>
              <input type="string" /> <i>Bike color</i>
            </div>

            <div className={classes.inputBox}>
              <input type="date" /> <i>Date of theft</i>
            </div>

            <div className={classes.inputBox}>
              <input type="string" /> <i>Officer</i>
            </div>
  */}
            <div className={classes.inputBox}>
              <input type="string" /> <i>Your comment</i>
            </div>

            <div className={classes.inputBox}>
              <input type="submit" value="Send your report" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Report;
