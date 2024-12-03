import axios from "axios";

let axiosInstance = axios.create({
	baseURL: `https://backend-oner.vercel.app`,
	timeout: 10000,
	headers: {"Content-Type": "application/json"},
});

export default axiosInstance;
