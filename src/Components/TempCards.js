import React from "react";
import { TempCardInfo } from "./TempCardInfo";
import { SVG } from "./Svg";
import store from "../app/store";
import moment from "moment";

export const TempCards = () => {
    let Cards = [];

    for (let i = 0; i < 4; i++) {
        Cards.push(
            <div
                key={i}
                className="flex justify-between items-center flex-col h-40 w-full md:h-full shadow-1 p-4 m-3"
            >
                <div className="flex justify-center items-center flex-col h-full w-full">
                    <div className="max-h-1/6 w-full text-center">
                        <p className="mt-2">
                            {moment()
                                .add(i + 1, "days")
                                .format("ddd DD MMM YYYY")}
                        </p>
                    </div>
                    <div className="w-full">
                        <SVG
                            icon={
                                store.getState().location.WeatherInfo[i + 1]
                                    .icon
                            }
                            classes="w-1/6 md:w-4/6 h-full"
                        />
                    </div>
                    <div className="max-h-1/6 w-full">
                        <TempCardInfo
                            temp={
                                store.getState().location.WeatherInfo[i + 1]
                                    .temp
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }

    return Cards;
};
