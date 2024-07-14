import { IoIosCloud, IoIosThermometer } from "react-icons/io";
import { MdWaterDrop , MdAir, MdRemoveRedEye,MdPlayForWork} from "react-icons/md";

export default function CardConditions({pressure, humidity, visibility, wind, cloud, st}) {

    return(
        <div  className="bg-gradeint-2  rounded-2xl p-5 h-full w-full grid grid-cols-3 text-app-white-1 justify-between border-2">
            <div className="flex flex-col items-start justify-center">
                <h3 className="md:text-2xl text-base flex items-center gap-1"><MdWaterDrop/>Humedad</h3>
                <h4 className="md:text-base text-sm">{humidity}%</h4>
            </div>
            <div className="flex flex-col items-start justify-center">
                <h3 className="md:text-2xl text-base flex items-center gap-1"><MdAir/>Viento</h3>
                <h4 className="md:text-base text-sm">{wind} km/h</h4>
            </div>
            <div className="flex flex-col items-start justify-center">
                <h3 className="md:text-2xl text-base flex items-center gap-1"><MdPlayForWork/>Presión</h3>
                <h4 className="md:text-base text-sm">{pressure} hPa</h4>
            </div>
            <div className="flex flex-col items-start justify-center">
                <h3 className="md:text-2xl text-base flex items-center gap-1"><MdRemoveRedEye/>Visibilidad</h3>
                <h4 className="md:text-base text-sm">{visibility} km</h4>
            </div>
            <div className="flex flex-col items-start justify-center">
                <h3 className="md:text-2xl text-base flex items-center gap-1"><IoIosCloud/>Nubosidad</h3>
                <h4 className="md:text-base text-sm">{cloud}%</h4>
            </div>
            <div className="flex flex-col items-start justify-center">
                <h3 className="md:text-2xl text-base flex items-center gap-1"><IoIosThermometer/>Sensacion Termica</h3>
                <h4 className="md:text-base text-sm">{Math.round(st)} °C</h4>
            </div>
        </div>
    )

}