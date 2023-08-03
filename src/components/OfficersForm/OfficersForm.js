import React from 'react';
import { useSelector } from 'react-redux';
import { officerFields, officerFormValues, officerValidation, officerEditFields } from '../Form/FormConsts.js';
import { createOfficer, editOfficer, getOfficer } from '../Utilities/officers.js';
import { user } from '../redux/selectors.js';
import { checkAuthentification } from '../Utilities/checkAuthentification.js';
import Form from '../../components/Form/Form.js';
import classes from './OfficersForm.module.css'

const OfficersForm = () => {

  const userData = useSelector(user);

    const [officer, setOfficer] = React.useState(null);

    const [processMessage, setProcessMessage] = React.useState(null);

    const [approved, setApproved] = React.useState(false);

    const onCreateHandler = (values) => {
      createOfficer({...values, approved})
      .then(() => setProcessMessage('Сотрудник успешно зарегистрирован'))
      .catch((data) => setProcessMessage(data.response.data.message))
    }

    const onEditHaldler = (values) => {
      editOfficer({...values, approved, id: officer._id})
      .then(() => setProcessMessage('Данные сотрудника успешно изменены'))
      .catch((data) => setProcessMessage(data.response.data.message))
    }

    const officerId = window.location.pathname.split('/')[3];

    React.useEffect(() => {
      if(checkAuthentification(userData.data, userData.status)){
        if(officerId){
          getOfficer(officerId)
          .then((data) => {
            setOfficer(data.data); 
            setApproved(data.data.approved)
          })
          .catch((data) => setProcessMessage(data.response.data.message))
        }
      }
    }, [])

  if(officerId && officer){
      return(
        <section className={classes.section}>
          <Form 
            fields={officerEditFields}
            formValues={{firstName: officer.firstName, lastName: officer.lastName}} 
            onSubmit={onEditHaldler}
            submitName="Редактировать"
            formName="Редактировать сотрудника"
            processMessage={processMessage}
            isDirty={true}
            isValided={true}
          >
          <div className={classes.checkbox}>
            <label className={classes.checkbox_label} htmlFor="approved">Одобрить:</label>
            <input type="checkbox" name="approved" defaultChecked={officer.approved} value={approved} onChange={() => setApproved(prev => !prev)}/>
          </div>
          </Form> 
      </section>
      )
  }else if(!officer && !officerId){
    return (
      <section className={classes.section}>
          <Form 
            fields={officerFields}
            formValues={officerFormValues} 
            validationSchema={officerValidation} 
            onSubmit={onCreateHandler} 
            submitName="Создать сотрудника"
            formName="Создать"
            processMessage={processMessage}
          >
          <div className={classes.checkbox}>
            <label className={classes.checkbox_label} htmlFor="approved">Одобрить:</label>
            <input type="checkbox" name="approved" value={approved} onChange={() => setApproved(prev => !prev)}/>
          </div>
          </Form> 
      </section>
    )
  }
}

export default OfficersForm