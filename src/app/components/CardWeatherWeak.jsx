import { IoSunny , IoRainy, IoThunderstorm, IoSnow , IoCloudy , IoPartlySunny  } from "react-icons/io5";
import { MdAir, MdFoggy } from "react-icons/md";

function getDayname(dayNumber, index){
    //controlar overflow si dayNumber + index > 7
    let day = dayNumber + index;
    if (day > 6) {
        day = day - 7;
    } 
    switch (day) {
        case 0:
            return "Domingo";
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        default:
            return " ";
    }
}

function getIconCode(weather) {
    //codes: Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Clouds
    switch (weather) {
        case "Thunderstorm":
            return <IoThunderstorm className="text-app-blue"/>;
        case "Drizzle":
            return <IoRainy className="text-app-cyan"/>;
        case "Rain":
            return <IoRainy className="text-app-cyan"/>;
        case "Snow":
            return <IoSnow className="text-app-white-1"/>;
        case "Atmosphere":
            return <MdAir className="text-app-cyan"/>;
        case "Clear":
            return <IoSunny className="text-app-yellow" />;
        case "Clouds":
            return <IoCloudy  className="text-app-white-2"/>;
        default:
            return <IoPartlySunny  className="text-app-orange"/>;
    }
}

export default function CardWeatherWeak( {array} ) {
    console.log(array);

    const today = new Date().getDay();
    const numberDay = new Date().getDate();

    if (array.length === 0) {
        return null; // No renderiza nada si arrayHours está vacío
    }

    return (
        <ul className="h-full w-full bg-opacity-10 bg-gradient-4 rounded-2xl p-5 text-app-white-1 grid grid-row-7  divide-y-2 border-2">
            {array.map((item, index) => (
                <li key={index} className="flex justify-between px-5 items-center">
                    <h3 className="text-xl w-1/4">Día {getDayname(today+1, index)} {numberDay + index + 1}</h3>
                    <div className="flex flex-col items-center gap-1  w-1/4">
                    <p className="text-sm first-letter:uppercase">{item.weather[0].description}</p>
                        <p className="text-5xl">{getIconCode(item.weather[0].main)}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 w-1/4">
                        <p className="text-sm">Minima</p>
                        <p className="text-3xl">{Math.round(item.temp.min)}°C</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-sm">Maxima</p>
                        <p className="text-3xl">{Math.round(item.temp.max)}°C</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
