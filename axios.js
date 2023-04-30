import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emt-182031-backend.herokuapp.com/api',
    headers: {"Access-Control-Allow-Origin": "*"}
})

export default instance;