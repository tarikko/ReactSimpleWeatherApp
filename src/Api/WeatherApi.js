import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

/* location key => 6656 (Tlemcen) */
const WeatherApi = {
	GetIp: () => {
		return axios
			.get("http://api.ipify.org?format=json")
			.then((response) => response.data.ip)
			.catch((err) => alert(err));
	},
	GetLocationFromIp: (ip) => {
		return axios
			.get(`http://ipinfo.io/${ip}?token=c8c771551719f4`)
			.then((response) => response.data)
			.catch((err) => alert(err));
	},
	GetLocationKeyFromLocation: (Location) => {
		return axios
			.get(
				`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${Location}&apikey=${API_KEY}`
			)
			.then((response) => response.data)
			.catch((err) => alert(err));
	},
	GetTempUsingLocationKey: (key) => {
		return axios
			.get(
				`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?metric=true&apikey=${API_KEY}`
			)
			.then((response) => response.data)
			.catch((err) => alert(err));
	},
};
export default WeatherApi;
