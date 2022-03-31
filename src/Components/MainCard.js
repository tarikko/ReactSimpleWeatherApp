import React, { useState, useEffect } from "react";
import { WeekTempCards } from "./WeekTempCards";
import { SVG } from "./Svg";
import { useDispatch } from "react-redux";
import {
    setIp,
    setLocation,
    setWeatherInfo,
} from "../features/location/LocationSlice";
import store from "../app/store";
import { TempHeaderInfo } from "./TempHeaderInfo";
import moment from "moment";
import WeatherApi from "../Api/WeatherApi";

export const MainCard = (props) => {
    const [time, setTime] = useState(new Date());
    const [IsLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    setInterval(() => setTime(new Date()), 1000);

    let fetchIP = async () => {
        let ip = await WeatherApi.GetIp();
        dispatch(setIp(ip));
    };

    let fetchLocation = async () => {
        let location = await WeatherApi.GetLocationFromIp(
            store.getState().location.ip
        );
        let key = await WeatherApi.GetLocationKeyFromLocation(location.loc);

        dispatch(
            setLocation({
                Coordinates: location.loc,
                key: key.Key,
                Country: {
                    name: location.country,
                    city: {
                        name: location.city,
                    },
                    region: {
                        name: location.region,
                    },
                },
            })
        );
    };

    let fetchWeatherData = async (key) => {
        let Temp = await WeatherApi.GetTempUsingLocationKey(key);
        let Day = IsDay();

        for (let i = 0; i < 5; i++) {
            dispatch(
                setWeatherInfo({
                    temp: Temp.DailyForecasts[i].Temperature.Maximum.Value,
                    icon: Day
                        ? Temp.DailyForecasts[i].Day.Icon
                        : Temp.DailyForecasts[i].Night.Icon,
                })
            );
        }
    };

    let IsDay = () => {
        var currentHour = moment().format("HH");

        if (currentHour >= 7 && currentHour < 20) {
            return true;
        } else if (currentHour >= 20 || currentHour < 7) {
            return false;
        } else {
            return true;
        }
    };
    useEffect(() => {
        let FetchData = async () => {
            await fetchIP();
            await fetchLocation();
            await fetchWeatherData(store.getState().location.location.key);
            setIsLoading(false);
        };
        FetchData();
    }, []);

    if (!IsLoading) {
        return (
            <div className="h-full w-full relative md:shadow-2xl">
                <div className="h-2/5 bg-blue-500 text-white flex flex-initial flex-col justify-center items-center flex-1 md:p-2">
                    <div className="border-b h-1/6 w-full text-center">
                        <p>{moment(time).format("H:mm:ss")}</p>
                    </div>
                    <div className="h-5/6 w-full flex justify-center items-center flex-row">
                        <div className="w-1/4">
                            <SVG
                                icon={
                                    store.getState().location.WeatherInfo[0]
                                        .icon
                                }
                                classes="w-full h-auto"
                            />
                        </div>
                        <TempHeaderInfo
                            temp={store.getState().location.WeatherInfo[0].temp}
                            location={{
                                country: {
                                    name: store.getState().location.location
                                        .Country.name,
                                    city: {
                                        name: store.getState().location.location
                                            .Country.city.name,
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="h-3/5">
                    <WeekTempCards />
                </div>
            </div>
        );
    } else {
        return <p>Loading ...</p>;
    }
};
