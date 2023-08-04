import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../redux/selectors";
import { checkAuthentification } from "../Utilities/checkAuthentification";
import { getOfficers } from "../Utilities/officers";
import ListItem from "../ListItem/ListItem";
import classes from "./Officers.module.css";

const Officers = () => {
  const userData = useSelector(user);

  const [officers, setOfficers] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    if (checkAuthentification(userData.data, userData.status)) {
      getOfficers()
        .then((data) => setOfficers(data.officers))
        .catch(() =>
          setErrorMessage("Ошибка при получении данных о сотруднике")
        );
    } else {
    }
  }, []);

  const officerIsLoaded =
    userData.data && userData.status === "fulfilled" && officers;
  return (
    <section className={classes.officers_section}>
      {errorMessage ? (
        <p className={classes.error}>Ошибка при получении данных сотрудника</p>
      ) : officerIsLoaded && !errorMessage ? (
        <>
          <div className={classes.officers}>
            <h2 className={classes.heading}>Наши сотрудники</h2>
            <ul className={classes.list}>
              {officers.map((el) => (
                <ListItem officer={el} key={el._id} type="officer" />
              ))}
            </ul>
            <button className={classes.button_create}>
              <Link to="/officers/create" className={classes.officers_link}>
                Создать сотрудника
              </Link>
            </button>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Officers;
