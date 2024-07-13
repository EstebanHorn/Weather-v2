import { TiWeatherPartlySunny, TiMap ,TiThList, TiCalendarOutline    } from "react-icons/ti";
import { LiaSun} from "react-icons/lia";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const actualPath =  usePathname();
    console.log(actualPath);
    return (
        <nav className="gap-10 pt-10 bg-gradient-blue h-full w-full rounded-2xl flex flex-col items-center ">
            <h3>
                <LiaSun className="text-5xl text-app-yellow"/>
            </h3>
            <hr className="w-3/4 bg-app-white-2 h-1 rounded-full"/>
            <Link href="/" className={` ${actualPath == "/" ? "bg-app-white-2 bg-opacity-50" : "hover:bg-app-white-2 hover:bg-opacity-50"} flex flex-col text-app-white-1 items-center justify-center gap-1 text-xs p-2 px-3 rounded-2xl`}>
            <TiWeatherPartlySunny className="text-4xl "/>
                Clima
            </Link >
            <Link href="/calendario" className={` ${actualPath == "/calendario" ? "bg-app-white-2 bg-opacity-50" : "hover:bg-app-white-2 hover:bg-opacity-50"} flex flex-col text-app-white-1 items-center justify-center gap-1 text-xs p-2 px-3 rounded-2xl`}>
            <TiCalendarOutline  className="text-4xl "/>
            30 dias
            </Link >
           
            <h3 className="flex flex-col text-app-white-1 items-center justify-center gap-1 text-xs">
            <TiMap  className="text-4xl "/>
            Ubicación
            </h3>
           

        </nav>
    );
    }