import React , {Component} from 'react';
import storm from "../images/weather-icons/storm.svg";
class WeatherN extends Component {
    render(){
        return(
            <main>
                <div className='WeatherN'>
                    <div className='part1'>
                       <img  className="imgN" src={storm} alt="storm icon" width="15rem" height="15rem"/>
                       <h1 className='description'>storm</h1>
                    </div>
                    <div className='part2'>
                         <p className='temperature'><strong>Temperature &nbsp;</strong>  10º to 11ºC</p>
                    </div>
                    <div className='part3'>
                         <p className='Humadity'><strong>Humadity &nbsp;&nbsp;</strong> 78%</p>
                         <p className='Pressure'><strong>Pressure &nbsp;&nbsp;</strong>1008.48</p>
                    </div>
                </div>
            </main>
        
        )
    }
}
export default WeatherN