import React from "react";
import { TempCards } from "./TempCards";

export const WeekTempCards = (props) => {
    return (
        <div className="flex justify-center items-center h-full flex-wrap flex-row md:max-w-full md:flex-nowrap md:p-3">
            <TempCards />
        </div>
    );
};
