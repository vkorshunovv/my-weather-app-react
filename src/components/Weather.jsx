import { useState, useEffect } from "react";
import "./Weather.css";

const Weather = () => {
  const API_KEY_ID = "330e43a6758846a7a2783931242906";

  const [weatherData, setWeatherData] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);

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

      setLoading(false);
      setInputValue("");
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    url("Barcelona");
  }, []);

  return (
    <div className="weather">
      <div className="searchbar">
        <input
          type="text"
          placeholder="City"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => url(inputValue)}>Go</button>
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="main-info">
          <img src={weatherData.icon} alt="Weather condition" />
          <p className="temparature">{weatherData.degree}&deg; C</p>
          <p className="city">{weatherData.city}</p>
        </div>
      )}
      <div className="additional-info">
        <div className="humidity-container">
          <p>{weatherData.humidity} %</p>
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
