import { IoSunny , IoRainy, IoThunderstorm, IoSnow , IoCloudy , IoPartlySunny  } from "react-icons/io5";
import { MdAir, MdFoggy } from "react-icons/md";
export function getIconCode(weather) {
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