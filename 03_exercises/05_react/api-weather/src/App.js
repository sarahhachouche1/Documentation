import React, { Component } from 'react';
import './App.css'; 
import Header from './components/Header';
import WeatherN from './components/WeatherN';
import WeatherL from './components/WeatherL';
class App extends Component{
  getWeather = (e) => {
    e.preventDefault()
     console.log("Weather")
  }
  render()
  {
    return(
       <div className="App">
           <Header getWeather={this.getWeather}/>
           <WeatherN />
           <WeatherL/>
       </div>
    )
  }
}
export default App;
 