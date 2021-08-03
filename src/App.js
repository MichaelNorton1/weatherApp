import "./App.css";
import "tachyons";

import myKey from "./config.js";
import request from "request";
import { useState } from "react";
import Top from "./top/top.js";
import UserInput from "./components/sidebar.js";
import Card from "./components/card.js";
function App() {
  const [weatherData, setWeatherState] = useState("no weather to display");
  const findCity = async (props) => {
    if (props === undefined) {
      return;
    } else {
      const x = props.zipcode;

      const url =
        `https://api.openweathermap.org/data/2.5/weather?zip=${x},us&units=imperial&appid=` +
        myKey;

      request(url, function (error, res, body) {
        const data = JSON.parse(body);
        if (error) {
          setWeatherState("no weather to display");
          console.log(error);
        }

        setWeatherState(data);
      });
    }
  };

  const temperature = (props) => {
    if (
      weatherData.cod !== 401 &&
      weatherData !== "no weather to display" &&
      weatherData !== null &&
      weatherData.message !== "city not found" &&
      weatherData.message !== "invalid zip code"
    ) {
      const temp = weatherData.main.temp;
      const cityName = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const desc = weatherData.weather[0].description;
      return [temp, cityName, icon, desc];
    } else {
      return "no weather to display";
    }
  };

  return (
    <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns ">
      <div className="center">
        <Top></Top>
      </div>
      <UserInput className="" data={findCity}></UserInput>
      <Card weather={temperature}></Card>
    </div>
  );
}

export default App;
