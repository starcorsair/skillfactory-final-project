import * as yup from "yup";

const registerFields = [
  { id: 1, label: "Имя", name: "firstName", type: "text" },
  { id: 2, label: "Фамилия", name: "lastName", type: "text" },
  { id: 3, label: "Email", name: "email", type: "text" },
  { id: 4, label: "Пароль", name: "password", type: "password" },
  { id: 5, label: "Client ID", name: "clientId", type: "text" },
];

const registerFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  clientId: "",
};

const registerValidation = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup
    .string()
    .email("Введите ваш E-mail")
    .required("Пожалуйста, заполните это поле"),
  password: yup
    .string()
    .min(10, "Хороший пароль содержит не меньше 10 символов")
    .required("Пожалуйста, заполните это поле"),
  clientId: yup.string().required("Поле обязательно к заполнению"),
});

const loginFields = [
  { id: 1, label: "Email", name: "email", type: "text" },
  { id: 2, label: "Пароль", name: "password", type: "password" },
];

const loginFormValues = { email: "", password: "" };

const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Введите ваш E-mail")
    .required("Пожалуйста, заполните это поле"),
  password: yup
    .string()
    .min(10, "Хороший пароль содержит не меньше 10 символов")
    .required("Пожалуйста, заполните это поле"),
});

const reportFields = [
  { id: 1, label: "Номер лицензии", name: "licenseNumber", type: "text" },
  { id: 2, label: "ФИО владельца", name: "ownerFullName", type: "text" },
  { id: 3, label: "Client ID", name: "clientId", type: "text" },
  { id: 4, label: "Цвет", name: "color", type: "text" },
  { id: 5, label: "Дата кражи", name: "date", type: "text" },
  { id: 6, label: "Доп. информация", name: "description", type: "text" },
];

const reportEditFields = [
  { id: 1, label: "Номер лицензии", name: "licenseNumber", type: "text" },
  { id: 2, label: "ФИО владельца", name: "ownerFullName", type: "text" },
  { id: 3, label: "Цвет", name: "color", type: "text" },
  { id: 4, label: "Дата кражи", name: "date", type: "text" },
  { id: 5, label: "Доп. информация", name: "description", type: "text" },
  { id: 6, label: "Решение", name: "resolution", type: "text" },
];

const reportFormValues = {
  licenseNumber: "",
  ownerFullName: "",
  clientId: "",
  color: "",
  description: "",
};

const reportValidation = yup.object().shape({
  licenseNumber: yup.string().required("Пожалуйста, заполните это поле"),
  ownerFullName: yup.string().required("Пожалуйста, заполните это поле"),
  clientId: yup.string().required("Пожалуйста, заполните это поле"),
});

const reportEditValidation = yup.object().shape({
  licenseNumber: yup.string().required("Пожалуйста, заполните это поле"),
  ownerFullName: yup.string().required("Пожалуйста, заполните это поле"),
});

const officerFields = [
  { id: 1, label: "Имя", name: "firstName", type: "text" },
  { id: 2, label: "Фамилия", name: "lastName", type: "text" },
  { id: 3, label: "Email", name: "email", type: "text" },
  { id: 4, label: "Пароль", name: "password", type: "password" },
];

const officerFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const officerValidation = yup.object().shape({
  email: yup
    .string()
    .email("Введите ваш E-mail")
    .required("Пожалуйста, заполните это поле"),
  password: yup
    .string()
    .min(10, "Хороший пароль содержит не меньше 10 символов")
    .required("Пожалуйста, заполните это поле"),
});

const officerEditFields = [
  { id: 1, label: "Имя", name: "firstName", type: "text" },
  { id: 2, label: "Фамилия", name: "lastName", type: "text" },
];

export {
  registerFields,
  registerFormValues,
  registerValidation,
  loginFormValues,
  loginValidation,
  loginFields,
  reportFields,
  reportFormValues,
  reportValidation,
  officerFields,
  officerFormValues,
  officerValidation,
  officerEditFields,
  reportEditFields,
  reportEditValidation,
};
