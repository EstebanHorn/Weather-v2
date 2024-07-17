"use client"
import { useEffect, useState } from "react"
import {getIconCode} from "../services"
import './styles.css'
import Navbar from "../components/Navbar";

function addDay(today, index) {
    let newDate = new Date(today);
    newDate.setDate(newDate.getDate() + index);
    return newDate;
}

function getMonth(today) {
    let month = today.getMonth();
    switch (month) {
        case 0:
            return "Enero";
        case 1:
            return "Febrero";
        case 2:
            return "Marzo";
        case 3:
            return "Abril";
        case 4:
            return "Mayo";
        case 5:
            return "Junio";
        case 6:
            return "Julio";
        case 7:
            return "Agosto";
        case 8:
            return "Septiembre";
        case 9:
            return "Octubre";
        case 10:
            return "Noviembre";
        case 11:
            return "Diciembre";
        default:
            return "Error";
    }
}

export default function Calendario() {
    const [forecast, setForecast] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const today = new Date();
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }, []);
    //https://pro.openweathermap.org/data/2.5/forecast/climate?lat={lat}&lon={lon}&appid={API key}
    useEffect(() => {
        if (lat !== null && lon !== null) {
            fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&appid=0127d4c6eef8ace666ed0071b86345c7&units=metric&lang=es`)
                .then((res) => res.json())
                .then((data) => setForecast(data));
        }
    }, [lat, lon]);

    if (!forecast) {
        return (
        <section className="flex h-screen w-full items-center justify-center">
        <div class="loader"></div>
        </section>)
    }

    return (
        <section className="grid-parent p-5">
            <Navbar/>
            <ul className="container md:h-full bg-gradient-blue md:w-full ">
                {forecast && forecast.list.map((forecast, index) => (
                    <li key={forecast.dt} className="item-container">
                        <h3 className="mc:text-sm text-[10px]">{addDay(today, index).getDate()} de {getMonth(addDay(today, index))}</h3>
                        <h4 className="md:text-5xl text-3xl">{getIconCode(forecast.weather[0].main)}</h4>
                        <div className="w-full flex md:flex-row flex-col justify-between items-start">
                            <h2 className="md:text-base text-[10px]">min: {Math.round(forecast.temp.min)}°C</h2>
                            <h2 className="md:text-base text-[10px]">max: {Math.round(forecast.temp.max)}°C</h2>
                        </div>

                    </li>
                ))}
            </ul>
        </section>
        
    )
}
