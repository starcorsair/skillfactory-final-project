import React from "react";
import { useSelector } from "react-redux";
import {
  officerFields,
  officerFormValues,
  officerValidation,
  officerEditFields,
} from "../Form/FormConsts.js";
import {
  createOfficer,
  editOfficer,
  getOfficer,
} from "../Utilities/officers.js";
import { user } from "../redux/selectors.js";
import { checkAuthentification } from "../Utilities/checkAuthentification.js";
import Form from "../../components/Form/Form.js";
import classes from "./EmployeeRed.module.css";

const EmployeeRed = () => {
  const userData = useSelector(user);

  const [employee, setEmployee] = React.useState(null);

  const [processMessage, setProcessMessage] = React.useState(null);

  const [approved, setApproved] = React.useState(false);

  const onCreateHandler = (values) => {
    createEmployee({ ...values, approved })
      .then(() => setProcessMessage("Employee successfully registered"))
      .catch((data) => setProcessMessage(data.response.data.message));
  };

  const onEditHaldler = (values) => {
    editEmployee({ ...values, approved, id: employee._id })
      .then(() => setProcessMessage("Employee data changed successfully"))
      .catch((data) => setProcessMessage(data.response.data.message));
  };

  const employeeId = window.location.pathname.split("/")[3];

  React.useEffect(() => {
    if (checkAuthentification(userData.data, userData.status)) {
      if (employeeId) {
        getEmployee(employeeId)
          .then((data) => {
            setEmployee(data.data);
            setApproved(data.data.approved);
          })
          .catch((data) => setProcessMessage(data.response.data.message));
      }
    }
  }, []);

  if (employeeId && employee) {
    return (
      <section className={classes.section}>
        <Form
          fields={employeeEditFields}
          formValues={{
            firstName: employee.firstName,
            lastName: employee.lastName,
          }}
          onSubmit={onEditHaldler}
          submitName="Edit"
          formName="Edit employee"
          processMessage={processMessage}
          isDirty={true}
          isValided={true}
        >
          <div className={classes.checkbox}>
            <label className={classes.checkbox_label} htmlFor="approved">
              Approve:
            </label>
            <input
              type="checkbox"
              name="approved"
              defaultChecked={officer.approved}
              value={approved}
              onChange={() => setApproved((prev) => !prev)}
            />
          </div>
        </Form>
      </section>
    );
  } else if (!employee && !employeeId) {
    return (
      <section className={classes.section}>
        <Form
          fields={employeeFields}
          formValues={employeeFormValues}
          validationSchema={Vemployeealidation}
          onSubmit={onCreateHandler}
          submitName="Create employee"
          formName="Create"
          processMessage={processMessage}
        >
          <div className={classes.checkbox}>
            <label className={classes.checkbox_label} htmlFor="approved">
              Approve:
            </label>
            <input
              type="checkbox"
              name="approved"
              value={approved}
              onChange={() => setApproved((prev) => !prev)}
            />
          </div>
        </Form>
      </section>
    );
  }
};

export default EmployeeRed;
