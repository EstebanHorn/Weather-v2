import { IoSunny , IoRainy, IoThunderstorm, IoSnow , IoCloudy , IoPartlySunny  } from "react-icons/io5";
import { MdAir, MdFoggy } from "react-icons/md";

// Función para obtener la hora
function getHour(date) {
    let hour = new Date(date).getHours();
    return hour;
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

export default function CardWeatherhours({ array }) {
    return (
        <ul className="flex h-full w-full md:flex-nowrap flex-wrap bg-gradient-3 bg-opacity-10 rounded-2xl text-app-white-1 md:divide-x-2 md:items-start items-center md:p-10 p-3 border-2">  
            {array.list.map((item, index) => (
                <li key={index} className="md:h-full md:w-full flex flex-col items-center justify-between md:p-0 p-2 md:gap-0 gap-2 ">
                    <h3 className="md:text-3xl">{getHour(item.dt_txt)}:00</h3>
                    <div className="flex flex-col items-center justify-center md:gap-0 gap-2">
                     <h4 className="md:text-4xl text-2xl">{getIconCode(item.weather[0].main)}</h4>
                        <h4 className="md:text-sm text-xs text-center">{item.weather[0].description}</h4>
                    </div>

                    <h4 className="md:text-xl text-sm">{Math.round(item.main.temp)}°C</h4>
                </li>
            ))}
        </ul>
    );
}
