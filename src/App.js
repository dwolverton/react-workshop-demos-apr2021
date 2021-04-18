import './App.css';
import Counter from './components/Counter';
import FakeWeather from './components/FakeWeather';
import RealWeather from './components/RealWeather';
import Switch from './components/Switch';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <h1>This is React</h1>
      <RealWeather />
      <FakeWeather />

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
