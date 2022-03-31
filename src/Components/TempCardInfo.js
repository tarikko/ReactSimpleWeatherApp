import React from "react";

export const TempCardInfo = (props) => {
    return (
        <div>
            <p className="text-center text-4xl antialiased font-sans-serif">
                {props.temp} °C
            </p>
        </div>
    );
};
