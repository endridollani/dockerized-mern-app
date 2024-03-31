import { Alert } from "@mui/material";
import axios, { AxiosResponse } from "axios";

const agent = axios.create({
    baseURL: 'http://localhost:8080'
});

agent.interceptors.response.use((response: AxiosResponse<any, any>) => {
    if (response?.data?.error) {
        Alert({severity: 'error', title: response?.data?.error?.name ?? "Error"});
    }
    return response;
})

export default agent;