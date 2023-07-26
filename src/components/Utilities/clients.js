import axios from "axios";
import { getToken } from "./tokens";

export const client = axios.create({
    baseURL: 'https://sf-final-project-be.herokuapp.com/api',
    headers: {
        "Content-Type": "application/json"
    }
});

export const clientAuth = axios.create({
    baseURL: 'https://sf-final-project-be.herokuapp.com/api',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + getToken()
    }
});