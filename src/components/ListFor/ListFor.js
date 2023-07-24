{
  /* import React from 'react'
import {Link} from 'react-router-dom';
import Info from '../Info/Info'
import classes from './ListItem.module.css';


const reportInfo = [
    {id: 1, name: 'ФИО владельца', value: 'ownerName'},
    {id: 2, name: 'Номер лицензии', value: 'licenseNumber'},
    {id: 3, name: 'Цвет', value: 'color'},
    {id: 4, name: 'Тип', value: 'type'},
    {id: 5, name: 'Решение', value: 'resolution'},
  ];
  
  const officerInfo = [
    {id: 1, name: 'Имя', value: 'firstName'},
    {id: 2, name: 'Фамилия', value: 'lastName'},
    {id: 3, name: 'Email', value: 'email'},
    {id: 4, name: 'Одобрен', value: 'approved'},
  ];

  const ListItem = ({report, officer, type}) => {
    if(type === 'officer'){
      return (
        <li className={classes.list_item}>
            <ul className={classes.details}>
                {officerInfo.map((el) => (
                  <Info name={el.name} value={officer[`${el.value}`]} key={el.id}/>
                ))}
            </ul>
            <button className={classes.button_link}>
            <Link to={`/officers/id=${officer._id}`} className={classes.link}>Подробнее</Link> </button>
        </li>
      )
    }else if(type === 'report'){
      return (
        <li className={classes.list_item}>
            <ul className={classes.details}>
                {reportInfo.map((el) => (
                  <Info name={el.name} value={report[`${el.value}`]} key={el.id}/>
                ))}
            </ul>
            <button className={classes.button_link}>
            <Link to={`/reports/id=${report._id}`} className={classes.link}>Подробнее</Link> </button>
        </li>
      )
    }
  }
  
export default ListItem */
}
