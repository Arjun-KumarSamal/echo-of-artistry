
import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, Wind, MapPin } from 'lucide-react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    temp: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 8,
    location: 'San Francisco'
  });
  
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'Sunny': return <Sun className="w-5 h-5 text-yellow-400" />;
      case 'Rainy': return <CloudRain className="w-5 h-5 text-blue-400" />;
      default: return <Cloud className="w-5 h-5 text-gray-300" />;
    }
  };

  return (
    <div className="fixed top-6 left-6 z-40">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 shadow-xl max-w-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {getWeatherIcon()}
            <span className="text-white font-semibold text-lg">{weather.temp}°C</span>
          </div>
          <div className="text-white/60 text-xs">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
          <MapPin className="w-3 h-3" />
          <span>{weather.location}</span>
        </div>
        
        <div className="flex items-center justify-between text-white/60 text-xs">
          <div className="flex items-center gap-1">
            <Wind className="w-3 h-3" />
            <span>{weather.windSpeed} km/h</span>
          </div>
          <span>Humidity: {weather.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
