import { useState, useEffect } from "react";
import "./Weather.css";

const Weather = () => {
  const API_KEY_ID = "330e43a6758846a7a2783931242906";

  const inputHTML = document.querySelector(".input");

  const [weatherData, setWeatherData] = useState(false);

  const url = async (city) => {
    try {
      
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY_ID}&q=${city}`
      );
      const data = await response.json();
      setWeatherData({
        city: data.location.name,
        degree: data.current.temp_c,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        icon: data.current.condition.icon,
      });

      inputHTML.value = "";
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    url("Barcelona");
  }, []);

  return (
    <div className="weather">
      <div className="searchbar">
        <input type="text" placeholder="City" className="input" />
        <button onClick={() => url(inputHTML.value)}>Go</button>
      </div>
      <div className="main-info">
        <img src={weatherData.icon} alt="Weather condition" />
        <p className="temparature">{weatherData.degree}&deg; C</p>
        <p className="city">{weatherData.city}</p>
      </div>
      <div className="additional-info">
        <div className="humidity-container">
          <p>{weatherData.humidity}</p>
          <p>Humidity</p>
        </div>
        <div className="wind-speed">
          <p>{weatherData.wind} Km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
