import "./App.css";

import request from "request";
import { useState } from "react";
import Top from "./top/top.js";
import Sidebar from "./components/sidebar.js";
import Card from "./components/card.js";
function App() {
  const [weatherData, setWeatherState] = useState("no weather to display");
  const findCity = async (props) => {
    const x = props.zipcode;

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${x},us&units=imperial&appid=56ef537d238ede2db0841928d59d3e33`;

    request(url, function (error, res, body) {
      //console.log(error);
      const x = JSON.parse(body);

      setWeatherState(x);
    });
  };

  const temperature = () => {
    if (weatherData !== "no weather to display") {
      const temp = weatherData.main.temp;
      const cityName = weatherData.name;
      const icon = weatherData.weather[0].icon;
      return [temp, cityName, icon];
    } else {
      return ""; // I can make an array here and check the length in
      // the card to decide what to display
    }
  };
  console.log(weatherData);
  return (
    <div className="App">
      <div>
        <Top></Top>
        <Sidebar data={findCity}></Sidebar>
      </div>
      <Card weather={temperature}></Card>
      <div></div>
    </div>
  );
}

export default App;
