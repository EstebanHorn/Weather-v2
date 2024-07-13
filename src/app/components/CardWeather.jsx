import { IoSunny , IoRainy, IoThunderstorm, IoSnow , IoCloudy , IoPartlySunny  } from "react-icons/io5";
import { MdAir, MdFoggy } from "react-icons/md";
function getIconCode(weather) {
    //codes: Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Clouds
    switch (weather) {
        case "Thunderstorm":
            return <IoThunderstorm className="text-app-blue animate-cloud"/>;
        case "Drizzle":
            return <IoRainy className="text-app-cyan animate-cloud"/>;
        case "Rain":
            return <IoRainy className="text-app-cyan animate-cloud"/>;
        case "Snow":
            return <IoSnow className="text-app-white-1"/>;
        case "Atmosphere":
            return <MdAir className="text-app-cyan animate-wind"/>;
        case "Clear":
            return <IoSunny className="text-app-yellow animate-sun text-sha shadow-white" />;
        case "Clouds":
            return <IoCloudy  className="text-app-white-2 animate-cloud"/>;
        default:
            return <IoPartlySunny  className="text-app-orange animate-cloud"/>;
    }
}

export default function CardWeather({ weather}) {
    console.log(weather);
    return (
        <div className=" rounded-xl p-5 h-full flex justify-between items-center text-app-white-1 ">
            <div className=" flex flex-col justify-between h-full">
                <h3 className=" text-3xl">{weather.name}</h3>
                <h3 className="text-7xl">{Math.round(weather.main.temp)} °C</h3>
            </div>
            <div className="w-fit h-fit">
                <h3 className="text-9xl">{getIconCode(weather.weather[0].main)}</h3>
            </div>
        </div>
    )
}