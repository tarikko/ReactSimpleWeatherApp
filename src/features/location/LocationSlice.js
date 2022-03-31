import { createSlice } from "@reduxjs/toolkit";

export const LocationSlice = createSlice({
    name: "location",
    initialState: {
        ip: "",
        location: {
            Coordinates: "",
            Country: {
                name: "",
                city: {
                    name: "",
                },
                region: {
                    name: "",
                },
            },
            key: "",
        },
        WeatherInfo: [],
    },
    reducers: {
        setIp: (state, action) => {
            state.ip = action.payload;
        },
        setLocation: (state, action) => {
            state.location.Country.name = action.payload.Country.name;
            state.location.Country.region.name =
                action.payload.Country.region.name;
            state.location.Country.city.name = action.payload.Country.city.name;
            state.location.Coordinates = action.payload.Coordinates;
            state.location.key = action.payload.key;
        },
        setWeatherInfo: (state, action) => {
            state.WeatherInfo.push({
                temp: action.payload.temp,
                icon: action.payload.icon,
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIp, setLocation, setWeatherInfo } = LocationSlice.actions;

export default LocationSlice.reducer;
