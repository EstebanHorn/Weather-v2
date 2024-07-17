import { TiWeatherPartlySunny, TiMap, TiThList, TiCalendarOutline } from "react-icons/ti";
import { LiaSun } from "react-icons/lia";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const actualPath = usePathname();
    return (
        <nav className="md:gap-10 md:pt-10 pl-2 md:pl-0 bg-gradient-blue h-full md:w-full w-full rounded-2xl flex md:flex-col items-center md:justify-start justify-around ">
            <h3>
                <LiaSun className="md:text-5xl text-3xl text-app-yellow" />
            </h3>
            <hr className="md:w-3/4 w-0 bg-app-white-2 h-1 rounded-full " />
            <Link href="/" className={` ${actualPath == "/" ? "bg-app-white-2 bg-opacity-50 text-app-white-1" : "hover:bg-app-white-2 hover:bg-opacity-50 text-app-white-2 hover:text-app-white-1"} flex flex-col w-full m-1 items-center justify-center gap-1 text-xs p-2 rounded-2xl`}>
                <TiWeatherPartlySunny className="md:text-4xl text-2xl " />
                Clima
            </Link >
            <Link href="/calendario" className={` ${actualPath == "/calendario" ? "bg-app-white-2 bg-opacity-50 text-app-white-1" : "hover:bg-app-white-2 hover:bg-opacity-50 text-app-white-2 hover:text-app-white-1"} flex flex-col w-full m-1 items-center justify-center gap-1 text-xs p-2  rounded-2xl`}>
                <TiCalendarOutline className="md:text-4xl text-2xl" />
                30 dias
            </Link >
        </nav>
    );
}

/*<h3 className="flex flex-col text-app-white-1 items-center justify-center gap-1 text-xs">
        <TiMap  className="text-4xl "/>
        Ubicación
        </h3>*/