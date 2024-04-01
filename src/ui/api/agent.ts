import { Alert } from "@mui/material";
import axios, { AxiosResponse } from "axios";

const agent = axios.create({
    baseURL: 'http://localhost:8080'
});

export default agent;