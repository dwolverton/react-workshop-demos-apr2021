import Weather from "./Weather";

function FakeWeather() {
  const weatherData = [
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ];

  return (
    <section className="FakeWeather">
      <h2>Fake Weather</h2>
      { weatherData.map(data => (
          <Weather key={data.time} time={data.time} conditions={data.conditions} tempF={data.highF}/>
      )) }
    </section>
  );
}

export default FakeWeather;