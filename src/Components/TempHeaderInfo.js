import React from 'react'
import moment from 'moment'

export const TempHeaderInfo = (props) => {
    return (
        <div className="flex justify-center items-center flex-col w-3/4 border-l">
            <p>{ moment().format("ddd DD MMM YYYY") }</p>
            <p className="text-center text-6xl antialiased font-sans-serif">{props.temp} °C</p>
            <p className="text-center antialiased font-sans-serif">{props.location.country.name}, {props.location.country.city.name}</p>
        </div>
    )
}