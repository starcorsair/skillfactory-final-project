import React from 'react'
import { getReports } from '../service/reports';
import { useSelector } from 'react-redux';
import { user } from '../redux/selectors';
import { checkAuthentification } from '../Utilities/checkAuthentification';
import ListItem from '../ListItem/ListItem';
import classes from './Reports.module.css'

const Reports = () => {

    const userData = useSelector(user);
    const [reports, setReports] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);

    React.useEffect(() => {
        if(checkAuthentification(userData.data, userData.status)){
            getReports()
            .then((data) => setReports(data.data))
            .catch(() => setErrorMessage('Ошибка при получении заявок'))
        }else{
        
        }
    }, [userData.data, userData.status]);

    const reportsIsLoaded = userData.data && userData.status === 'fulfilled' && reports

  return (
    <section className={classes.section}>
        {
        errorMessage
        ?
        <p className={classes.error}>Ошибка при получении заявок</p>
        :
        reportsIsLoaded && !errorMessage
        ?
        <ul className={classes.reports}>
            {
            reports.length
            ?
            reports.map((el) => (
                <ListItem report={el} key={el._id} type="report"/>
            ))
            :
           <p>На данный момент сообщений нет</p>
            }
        </ul>
        :
        null
        }
    </section>
  )
}

export default Reports