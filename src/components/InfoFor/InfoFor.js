import React from "react";
/*import { valueParser,  bikeValues, statusValues } from '../Utilities/valueParsers';*/
import classes from "./InfoFor.module.css";

const InfoFor = ({ name, value }) => {
  return (
    <li className={classes.details_item}>
      <span>{name}:</span>
      {name === "Тип"
        ? valueParser(bikeValues, value)
        : name === "Статус"
        ? valueParser(statusValues, value)
        : name === "Одобрен"
        ? value
          ? "Да"
          : "Нет"
        : value
        ? value
        : "Нет данных"}
    </li>
  );
};

export default InfoFor;
