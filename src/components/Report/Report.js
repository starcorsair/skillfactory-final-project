import React from "react";

import Form from "../Form/Form";
import {
  reportFields,
  reportFormValues,
  reportValidation,
  reportEditFields,
  reportEditValidation,
} from "../Form/FormConsts.js";
import {
  createUnauthReport,
  createReport,
  getReport,
  editReport,
} from "../service/reports.js";
import { useSelector } from "react-redux";
import { user } from "../redux/selectors.js";
import classes from "./Report.module.css";
import { getToken } from "../Utilities/tokens.js";
import { getOfficers } from "../Utilities/officers.js";
import { checkAuthentification } from "../Utilities/checkAuthentification";

const Report = () => {
  const userData = useSelector(user);

  const [report, setReport] = React.useState(null);

  const [officers, setOffisers] = React.useState(null);
  const [officersError, setOffisersError] = React.useState(false);

  const [processMessage, setProcessMessage] = React.useState(null);

  const [type, setType] = React.useState("");
  const [officer, setOfficer] = React.useState(null);

  const reportId = window.location.pathname.split("/")[3];

  React.useEffect(() => {
    if (reportId) {
      if (checkAuthentification(userData.data, userData.status)) {
        getOfficers()
          .then((data) => setOffisers(data.officers))
          .catch(() => {
            setProcessMessage("Ошибка при получении сотрудников");
            setOffisersError(true);
            setOffisers([]);
          });
        getReport(reportId)
          .then((data) => {
            setReport(data.data);
            setType(data.data.type);
            setOfficer(data.data.officer);
          })
          .catch(() => {
            setProcessMessage("Ошибка при получении данных о сообщении");
          });
      }
    } else {
      if (userData.data && userData.status) {
        getOfficers()
          .then((data) => setOffisers(data.officers))
          .catch(() => {
            setProcessMessage("Ошибка при получении сотрудников");
            setOffisersError(true);
            setOffisers([]);
          });
      }
    }
  }, [userData.data, userData.status]);

  const onReportHandler = (values) => {
    setProcessMessage(null);

    if (type.length === 0) {
      return setProcessMessage("Выберите тип велосипеда");
    }

    if (userData.data && getToken()) {
      createReport({ ...values, type, officer })
        .then(() => setProcessMessage("Заявка успешно создана"))
        .catch(() => setProcessMessage("Не удалось создать заявку"));
    } else {
      createUnauthReport({ ...values, type })
        .then(() => setProcessMessage("Заявка успешно создана"))
        .catch(() => setProcessMessage("Не удалось создать заявку"));
    }
  };

  const onEditHanlder = (values) => {
    editReport({ ...values, type, officer, id: report._id })
      .then(() => setProcessMessage("Сообщение успешно обновлено"))
      .catch((data) => setProcessMessage(data.response.data.message));
  };

  const officersLoaded =
    userData.data && userData.status === "fulfilled" && officers;

  if (reportId && report) {
    return (
      <section className={classes.section_report}>
        <Form
          fields={reportEditFields}
          formValues={{
            ownerFullName: report.ownerFullName,
            licenseNumber: report.licenseNumber,
            color: report.color,
            date: report.date,
            description: report.description,
            resolution: report.resolution,
          }}
          validation={reportEditValidation}
          onSubmit={onEditHanlder}
          submitName="Редактировать"
          formName="Редактирование сообщения"
          processMessage={processMessage}
          isDirty={true}
          isValided={true}
        >
          <div className={classes.select_list}>
            <select
              className={classes.select}
              defaultValue={report.type}
              name="type"
              onClick={(e) => setType(e.target.value)}
            >
              <option value="">Выберите тип велосипеда</option>
              <option value="city">Городской</option>
              <option value="road">Шоссейный</option>
              <option value="sport">Спортивный</option>
              <option value="electric">Электровелосипед</option>
              <option value="hybrid">Гибрид</option>
            </select>
          </div>
          {userData.data &&
          userData.status === "fulfilled" &&
          !officersLoaded ? (
            <p className={classes.message}>Загрузка сотрудников...</p>
          ) : officersError ? null : (
            officers && (
              <div className={classes.select_list}>
                <select
                  defaultValue={report.officer}
                  className={classes.select}
                  name="officer"
                  onClick={(e) => setOfficer(e.target.value)}
                >
                  <option value="">Выберите сотрудника</option>
                  {officers
                    .filter((el) => el.approved === true)
                    .map((el) => (
                      <option value={el._id} key={el._id}>
                        {el.lastName} {el.firstName}
                      </option>
                    ))}
                </select>
              </div>
            )
          )}
        </Form>
      </section>
    );
  } else if (!reportId && !report) {
    return (
      <section className={classes.sectionReport}>
        <Form
          fields={reportFields}
          formValues={reportFormValues}
          validation={reportValidation}
          onSubmit={onReportHandler}
          submitName="Сообщить"
          formName="Сообщить о краже"
          processMessage={processMessage}
        >
          <div className={classes.select_list}>
            <select
              className={classes.select}
              name="type"
              onClick={(e) => setType(e.target.value)}
            >
              <option value="">Выберите тип велосипеда</option>
              <option value="city">Городской</option>
              <option value="road">Шоссейный</option>
              <option value="sport">Спортивный</option>
              <option value="electric">Электровелосипед</option>
              <option value="hybrid">Гибрид</option>
            </select>
          </div>
          {userData.data &&
          userData.status === "fulfilled" &&
          !officersLoaded ? (
            <p className="process-message">Загрузка сотрудников...</p>
          ) : officersError ? null : (
            officers && (
              <div className={classes.select_list}>
                <select
                  name="officer"
                  className={classes.select}
                  onClick={(e) => setOfficer(e.target.value)}
                >
                  <option value="">Выберите сотрудника</option>
                  {officers
                    .filter((el) => el.approved === true)
                    .map((el) => (
                      <option value={el._id} key={el._id}>
                        {el.lastName} {el.firstName}
                      </option>
                    ))}
                </select>
              </div>
            )
          )}
        </Form>
      </section>
    );
  } else
    return (
      <section className={classes.sectionReport}>
        <Form
          fields={reportFields}
          formValues={reportFormValues}
          validation={reportValidation}
          onSubmit={onReportHandler}
          submitName="Сообщить"
          formName="Сообщить о краже"
          processMessage={processMessage}
        >
          <div className={classes.select_list}>
            <select
              className={classes.select}
              name="type"
              onClick={(e) => setType(e.target.value)}
            >
              <option value="">Выберите тип велосипеда</option>
              <option value="city">Городской</option>
              <option value="road">Шоссейный</option>
              <option value="sport">Спортивный</option>
              <option value="electric">Электровелосипед</option>
              <option value="hybrid">Гибрид</option>
            </select>
          </div>
          {userData.data &&
          userData.status === "fulfilled" &&
          !officersLoaded ? (
            <p className="process-message">Загрузка сотрудников...</p>
          ) : officersError ? null : (
            officers && (
              <div className={classes.select_list}>
                <select
                  name="officer"
                  className={classes.select}
                  onClick={(e) => setOfficer(e.target.value)}
                >
                  <option value="">Выберите сотрудника</option>
                  {officers
                    .filter((el) => el.approved === true)
                    .map((el) => (
                      <option value={el._id} key={el._id}>
                        {el.lastName} {el.firstName}
                      </option>
                    ))}
                </select>
              </div>
            )
          )}
        </Form>
      </section>
    );
};

export default Report;

{
  /*function Report() {
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
} */
}
