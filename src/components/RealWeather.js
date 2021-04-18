import { useState, useEffect } from "react";
import Weather from "./Weather";

function RealWeather() {
  // state stores the data from the API
  const [ weatherData, setWeatherData ] = useState([]);

  // useEffect will run the function once when the component first loads
  useEffect(() => {
    // Make API call here
    fetch("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(res => res.json())
    .then(body => {
      // store data from the response in the state
      setWeatherData(body.properties.periods);
    });
  }, []);

  return (
    <section className="RealWeather">
      <h2>Real Weather</h2>
      { weatherData.map(data => (
        <Weather key={data.number} time={data.name} conditions={data.shortForecast} tempF={data.temperature}/>
      )) }
    </section>
  )
}

export default RealWeather;