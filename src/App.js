import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import Login from "./components/login/login";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // const handleOnSearchChange = (searchData) => {
  //   const [lat, lon] = searchData.value.split(" ");

  //   const currentWeatherFetch = fetch(
  //     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  //   );
  //   const forecastFetch = fetch(
  //     `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  //   );

  //   Promise.all([currentWeatherFetch, forecastFetch])
  //     .then(async (response) => {
  //       const weatherResponse = await response[0].json();
  //       const forcastResponse = await response[1].json();

  //       setCurrentWeather({ city: searchData.label, ...weatherResponse });
  //       setForecast({ city: searchData.label, ...forcastResponse });
  //     })
  //     .catch(console.log);
  // };

  // return (
  //   <div className="container">
  //     <Search onSearchChange={handleOnSearchChange} />
  //     {currentWeather && <CurrentWeather data={currentWeather} />}
  //     {forecast && <Forecast data={forecast} />}
  //   </div>
  // );

  const handleOnSearchChange = (searchData) => {
    if (searchData.latitude && searchData.longitude) {
      const { latitude, longitude } = searchData;
  
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const forecastFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );
  
      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();
  
          setCurrentWeather({ ...weatherResponse });
          setForecast({ ...forecastResponse });
        })
        .catch(console.log);
    } else if (searchData.location) {
      const { location } = searchData;
  
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const forecastFetch = fetch(
        `${WEATHER_API_URL}/forecast?q=${location}&appid=${WEATHER_API_KEY}&units=metric`
      );
  
      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();
  
          setCurrentWeather({ ...weatherResponse });
          setForecast({ ...forecastResponse });
        })
        .catch(console.log);
    }
  };
  

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="mainpage">
      {/* <div>
        <nav>
          <ul>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div> */}

      
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>

    
  );


}

export default App;
