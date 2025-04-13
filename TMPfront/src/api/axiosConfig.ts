import axios from "axios"; "axios";

const axiosConfig = axios.create({
    baseURL: "http://tmpback.test/api",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})

export default axiosConfig;