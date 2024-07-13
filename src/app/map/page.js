"use client"
import { useEffect, useState } from "react"

export default function Map() {

    const [map, setMap] = useState(null);
    //key 0127d4c6eef8ace666ed0071b86345c7
//http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?appid={API key}
    useEffect(() => {
        fetch(`http://maps.openweathermap.org/maps/2.0/weather/TA2/5/10/15?appid=0127d4c6eef8ace666ed0071b86345c7`)
            .then((res) => setMap(res));
    }, []);

    return (
        <div className="h-screen w-screen bg-gradient-3 bg-opacity-10 flex flex-row items-center justify-center">
            <div className="h-3/4 w-3/4 bg-gradient-blue bg-opacity-10 rounded-2xl flex flex-row items-center justify-center">
                <h3 className="text-7xl text-app-white-1">Mapa</h3>
            </div>
        </div>
    )
}
