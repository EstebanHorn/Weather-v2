'use client'
import Navbar from "./components/Navbar";
import CardWeather from "./components/CardWeather";
import "./styles.css";
import CardWeatherhours from "./components/CardWeatherhours";
import CardConditions from "./components/CardConditions";
import CardWeatherWeak from "./components/CardWeatherWeak";
import { useEffect, useState } from "react";
//api_key = 96eca95843e16c50bbf3ae9ac17c3877

//url api clima actual por coordenadas
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//url api por horas por coordenadas por 4 dias
//https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}

//url api pronostico diario por 16 dias por coordenadas
//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

export default function Home() {

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weather, setWeather] = useState(null);
  const [weatherhours, setWeatherhours] = useState(null);
  const [weatherdays, setWeatherdays] = useState(null);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0127d4c6eef8ace666ed0071b86345c7&units=metric`)
        .then((res) => res.json())
        .then((data) => setWeather(data));
      fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&cnt=7&appid=0127d4c6eef8ace666ed0071b86345c7&units=metric&lang=es`)
        .then((res) => res.json())
        .then((data) => setWeatherhours(data));
      fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=0127d4c6eef8ace666ed0071b86345c7&units=metric&lang=es`)
        .then((res) => res.json())
        .then((data) => setWeatherdays(data));
  }, [lat, lon]);

  const busqueda = (e) => {
    e.preventDefault();
    // Agrega la lógica para la búsqueda aquí
    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target[0].value}&limit=5&appid=0127d4c6eef8ace666ed0071b86345c7`)
    .then((res) => res.json())
    .then((data) => {
      setLat(data[0].lat);
      setLon(data[0].lon);
    });
  
  };

  const ubicacionActual = () => {
    // Agrega la lógica para obtener la ubicación actual aquí
    console.log("Ubicación actual");
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  };

  return (
    <>   
    {(weather && weatherhours && weatherdays) && 
    <main className="p-5 h-screen gap-0 gridparent">
     
      <div className="grid1">
        <Navbar />
      </div>
      <div className="grid2 flex w-full gap-2">
      <form className=" w-full flex gap-2" onSubmit={busqueda}>
      <input
        type="text"
        placeholder="Buscar ciudad"
        className="bg-app-white-1 text-app-white-1 bg-opacity-10 rounded-xl pl-3 w-full"
      />
      <button
        type="submit"
        className="bg-app-white-1 text-app-white-1 bg-opacity-10 rounded-xl p-3"
      >
        Buscar
      </button>
    </form>
    <button className="bg-app-white-1 text-app-white-1 bg-opacity-10 rounded-xl p-2 text-sm"
    onClick={ubicacionActual}
    >
        Mi ubicación
      </button>
      </div>
      <div className="grid3">
        <CardWeather weather={weather}/>
      </div>
      <div className="grid4">
      <CardWeatherhours array={weatherhours}/>
      </div>
      <div className="grid5">
        <CardConditions pressure={weather.main.pressure} humidity={weather.main.humidity} visibility={weather.visibility/1000} wind={weather.wind.speed} st={weather.main.feels_like} cloud={weather.clouds.all}/>
      </div>
      <div className="grid6">
        <CardWeatherWeak array={weatherdays.list}/>
      </div>
    </main>
    }
    {!weather && !weatherhours && !weatherdays && 
    
    
          <section className="flex h-screen w-full items-center justify-center">
        <div class="loader"></div>
        </section>
      }
    </>
    
  );
}
