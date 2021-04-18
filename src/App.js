import './App.css';
import Counter from './components/Counter';
import Switch from './components/Switch';
import Weather from './components/Weather';

function App() {
  const weatherData = [
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ];

  return (
    <div className="App">
      <h1>This is React</h1>
      {
        weatherData.map(data => (
          <Weather key={data.time} time={data.time} conditions={data.conditions} tempF={data.highF}/>
        ))
      }

      {/* <Weather time="Today" conditions="Overcast" tempF={45}/>
      <Weather time="Tomorrow" conditions="Sunny" tempF={58}/>
      <Weather time="Tuesday" conditions="Thunderstorms" tempF={60}/> */}
      <Switch />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
