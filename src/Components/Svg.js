import React from "react";
import Sun from "../Icons/weather/svg/sun.svg";
import Clouds from "../Icons/weather/svg/clouds.svg";
import Rain from "../Icons/weather/svg/rain.svg";
import Storm from "../Icons/weather/svg/storm.svg";
import Snow from "../Icons/weather/svg/snow.svg";
import Moon from "../Icons/weather/svg/moon.svg";
import Wind from "../Icons/weather/svg/wind.svg";

/***************************
 * all icons :
 * 1 - sun
 * 2 - clouds
 * 3 - rain
 * 4 - storm
 * 5 - snow
 * 6 - moon
 * 7 - wind
 * response icon :
 * 1 --> 5 & 30 : sun
 * 6 --> 11 & 36 --> 38 : clouds
 * 12 --> 14 & 39 --> 40 & 18 : rain
 * 15 --> 17 & 41 --> 42: storm
 * 19 --> 29 & 43 --> 44 & 31 : snow
 * 33 --> 35 : moon
 * 32 : wind
 ***************************/
export const SVG = (props) => {
    switch (props.icon) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 30:
            return (
                <div className="flex justify-center items-center w-full h-auto">
                    <img src={Sun} alt="Sun" className={props.classes} />
                </div>
            );
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 36:
        case 37:
        case 38:
            return (
                <div className="flex justify-center items-center w-full h-auto">
                    <img src={Clouds} alt="Clouds" className={props.classes} />
                </div>
            );
        case 12:
        case 13:
        case 14:
        case 18:
        case 39:
        case 40:
            return (
                <div className="flex justify-center items-center w-full h-auto">
                    <img src={Rain} alt="Rain" className={props.classes} />
                </div>
            );
        case 15:
        case 16:
        case 17:
        case 41:
        case 42:
            return (
                <div className="flex justify-center items-center w-full h-auto">
                    <img src={Storm} alt="Storm" className={props.classes} />
                </div>
            );
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 31:
        case 43:
        case 44:
            return (
                <div className="flex justify-center items-center w-full h-auto">
                    <img src={Snow} alt="Snow" className={props.classes} />
                </div>
            );
        case 33:
        case 34:
        case 35:
            return (
                <div className="flex justify-center items-center w-full h-auto">
                    <img src={Moon} alt="Moon" className={props.classes} />
                </div>
            );
        case 32:
            return (
                <div className="flex justify-center items-center w-full h-auto">
                    <img src={Wind} alt="Wind" className={props.classes} />
                </div>
            );

        default:
            return null;
    }
};
