import React from "react";
import classes from "./Employees.module.css";

const Employees = () => {
  {
    /*const userData = useSelector(user);*/
  }

  const [employees, setEmployees] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  {
    /*React.useEffect(() => {
    if (checkAuthentification(userData.data, userData.status)) {
      getEmployees()
        .then((data) => setEmployees(data.employees))
        .catch(() => setErrorMessage("Error getting employee data"));
    } else {
    }
  }, []); */
  }

  {
    /* const employeeIsLoaded =
userData.data && userData.status === "fulfilled" && employees; */
  }
  return (
    <section className={classes.employees_part}>
      {/*  {errorMessage ? (
        <p className={classes.error}>Error getting employee data</p>
      ) : employeeIsLoaded && !errorMessage ? (
      <> */}

      <div className={classes.employees}>
        <h2 className={classes.heading}>Our employees</h2>
        <ul className={classes.list}></ul>
        <button className={classes.button_create}>Create</button>
      </div>
      {/* </> 
      ) : null} */}
    </section>
  );
};
export default Employees;
