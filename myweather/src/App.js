import React, { useState } from "react";
import "./index.css";

import Background from "./components/Background";
import Search from "./components/Search";
import Result from "./components/Result";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} // city name

function App() {
  const [searchWeather, setSearchWeather] = useState();

  return (
    <section className="application">
      <Background />
      <div id="baslik">Hava Durumu</div>
      <Search setSearchWeather={setSearchWeather} />
      <Result weather={searchWeather} />
    </section>
  );
}

export default App;
