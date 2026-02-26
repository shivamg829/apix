import { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-page">
      <div className="page-header">
        <h1>⛅ Weather App</h1>
        <p>Get real-time weather information for any city</p>
      </div>

      <div className="app-content">
        <div className="app-card search-card">
          <form onSubmit={fetchWeather} className="search-form">
            <div className="form-group">
              <label>City Name</label>
              <input
                type="text"
                placeholder="Enter city name (e.g., London)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search Weather
            </button>
          </form>
        </div>

        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {weather && !loading && !error && (
          <div className="app-card weather-card">
            <div className="weather-header">
              <h2>{weather.name}, {weather.sys.country}</h2>
            </div>
            <div className="weather-main">
              <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
              <div className="weather-temp">{Math.round(weather.main.temp)}°C</div>
              <p className="weather-desc">{weather.weather[0].description}</p>
            </div>
            
            <div className="weather-details">
              <div className="weather-detail">
                <span className="detail-label">💧 Humidity</span>
                <span className="detail-value">{weather.main.humidity}%</span>
              </div>
              <div className="weather-detail">
                <span className="detail-label">🌡️ Feels Like</span>
                <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
              </div>
              <div className="weather-detail">
                <span className="detail-label">💨 Wind Speed</span>
                <span className="detail-value">{weather.wind.speed} m/s</span>
              </div>
              <div className="weather-detail">
                <span className="detail-label">🔵 Pressure</span>
                <span className="detail-value">{weather.main.pressure} hPa</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
