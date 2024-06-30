import "./Weather.css";

const Weather = () => {
  return (
    <div className="weather">
      <div className="searchbar">
        <input type="text" placeholder="City"/>
        <button>Go</button>
      </div>
      <div className="main-info">
        <p className="temparature">16%</p>
        <p className="city">Madrid</p>
      </div>
      <div className="additional-info">
        <div className="humidity-container">
          <p>90%</p>
          <p>Humidity</p>
        </div>
        <div className="wind-speed">
          <p>3.09 Km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
