import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Authentification from '../Authentification/Authentification';
import OfficersForm from "../OfficersForm/OfficersForm";
import Details from '../Details/Details';


const routes = [
    { path: '/', element: <Main /> },
    { path: 'registration', element: <Authentification type="registration"/> },
    { path: 'login', element: <Authentification type="login"/> },
    { path: '/officers/create', element: <OfficersForm /> },
    { path: '/officers/edit/_id', element: <OfficersForm /> },
    { path: '/officers/_id', element: <Details type="officers"/> },
    { path: '*', element: <NotFound /> }
];

export const router = createBrowserRouter(routes);