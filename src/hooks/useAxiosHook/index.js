import {useEffect, useState} from "react";
import axios from "../../axiosInstance";

function useAxios(config) {
	let [data, setData] = useState(null);
	let [loading, setLoading] = useState(true);
	let [error, setError] = useState(null);

	useEffect(() => {
		let fetchData = async () => {
			try {
				setLoading(true);
				let response = await axios(config);
				setData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [JSON.stringify(config)]);

	return {data, loading, error};
}

export default useAxios;
