import React from "react";
import { getReport } from "../service/reports";
import { removeReport } from "../service/reports";
import { getOfficer, removeOfficer } from "../Utilities/officers";
import Info from "../Info/Info";
import { useSelector } from "react-redux";
import { user } from "../redux/selectors";
import { checkAuthentification } from "../Utilities/checkAuthentification";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import EditLink from "../EditLink/EditLink";
import Header from "../Header/Header";
import classes from "./Details.module.css";


const reportDetails = [
  { id: 1, name: "ФИО владельца", value: "ownerFullName" },
  { id: 2, name: "Номер лицензии", value: "licenseNumber" },
  { id: 3, name: "Цвет", value: "color" },
  { id: 4, name: "Тип", value: "type" },
  { id: 5, name: "Доп. информация", value: "description" },
  { id: 6, name: "Статус", value: "status" },
  { id: 7, name: "Сотрудник", value: "officer" },
  { id: 8, name: "Решение", value: "resolution" },
];

const officerDetails = [
  { id: 1, name: "Имя", value: "firstName" },
  { id: 2, name: "Фамилия", value: "lastName" },
  { id: 3, name: "Email", value: "email" },
];

const Details = ({ type }) => {
  const userData = useSelector(user);

  const [report, setReport] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const [officer, setOfficer] = React.useState(null);

  React.useEffect(() => {
    if (checkAuthentification(userData.data, userData.status)) {
      if (type === "officers") {
        getOfficer(window.location.pathname.split("=")[1])
          .then((data) => setOfficer(data.data))
          .catch((data) => setErrorMessage(data.response.data.message));
      } else if (type === "reports") {
        getReport(window.location.pathname.split("=")[1])
          .then((data) => {
            setReport(data.data);
            if (data.data.officer) {
              getOfficer(data.data.officer)
                .then((data) => setOfficer(data.data))
                .catch((data) => setErrorMessage(data.response.data.message));
            }
          })
          .catch((data) => setErrorMessage(data.response.data.message));
      }
    } else {
    }
  }, []);

  if (type === "officers") {
    return (
        <>
      <section className={classes.section}>
      <Header />
        <div className={classes.card}>
          {officer && (
            <>
              {officerDetails.map((el) => (
                <Info
                  name={el.name}
                  value={officer[`${el.value}`]}
                  key={el.id}
                />
              ))}

                <EditLink href={`/officers/edit/${officer._id}`} />
                <ButtonDelete
                  removeFunction={removeOfficer}
                  id={officer._id}
                  redirectTo="/officers"
                  setErrorMessage={setErrorMessage}
                />
            </>
          )}
          {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        </div>
      </section>
      </>
    );
  } else if (type === "reports") {
    return (
        <>
      <section className={classes.section}>
      <Header />
        {report && (
          <>
            {report.officer && officer
              ? reportDetails.map((el) =>
                  el.name === "Сотрудник" ? (
                    <Info
                      name={el.name}
                      value={`${officer.firstName} ${officer.lastName} `}
                      key={el.id}
                    />
                  ) : (
                    <Info
                      name={el.name}
                      value={report[`${el.value}`]}
                      key={el.id}
                    />
                  )
                )
              : reportDetails.map((el) => (
                  <Info
                    name={el.name}
                    value={report[`${el.value}`]}
                    key={el.id}
                  />
                ))}
            <div className={classes.actions}>
              <ButtonDelete
                removeFunction={removeReport}
                id={report._id}
                redirectTo="/reports"
                setErrorMessage={setErrorMessage}
              />
              <EditLink href={`/reports/edit/${report._id}`} />
            </div>
          </>
        )}
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
      </section>
      </>
    );
  }
};

export default Details;
