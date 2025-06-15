
import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';

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
      case 'Sunny': return <Sun className="w-8 h-8 text-yellow-400" />;
      case 'Rainy': return <CloudRain className="w-8 h-8 text-blue-400" />;
      default: return <Cloud className="w-8 h-8 text-gray-300" />;
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white font-semibold text-lg">{weather.temp}°C</h3>
            <p className="text-white/70 text-sm">{weather.condition}</p>
          </div>
          {getWeatherIcon()}
        </div>
        
        <div className="space-y-2 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4" />
            <span>{weather.windSpeed} km/h</span>
          </div>
          <div className="text-xs">
            Humidity: {weather.humidity}%
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="text-white/80 text-sm">{weather.location}</div>
          <div className="text-white/60 text-xs">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
