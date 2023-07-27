import React from "react";
import classes from "./Page.module.css";

function Page() {
  return (
    <div className={classes.app}>
      <div className={classes.origin}>
        <div className={classes.picture}>
          <ul>
            <li>Bikes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
