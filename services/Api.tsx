import axios, { AxiosInstance } from "axios";

const createApiBase = (): AxiosInstance => {
    const url = "http://localhost:8000/api";
    //const authToken: string | null = localStorage.getItem("authToken");

    //const headers = authToken ? { "Authorization": `Bearer ${authToken}` } : {};

    const instance = axios.create({
        baseURL: url,
        //headers,
    });

    return instance;
}

const BaseApi = createApiBase();

export default BaseApi;