import React from "react";

function Result({ weather }) {
  return (
    <>
      {typeof weather != "undefined" && (
        <div className="city">
          <div className="cityName">
            {weather.name},{weather.sys.country}
          </div>
          <div className="detail">
            <div className="degree">{Math.round(weather.main.temp)} °c</div>
            <div className="statu">{weather.weather[0].description}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
