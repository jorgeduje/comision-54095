import axios from "axios";

export const productsInstance = axios.create({
    baseURL: 'http://localhost:5000',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar', "Authorization": "barer dsadsad123123sdad"}
});

