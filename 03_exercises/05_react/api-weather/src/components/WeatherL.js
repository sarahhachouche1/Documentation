import React , {Component} from 'react';
import storm from "../images/weather-icons/storm.svg";
class WeatherL extends Component {
    render(){
        return(
            <div className='WeatherL'>
                <div className='time'>
                   <time>03:00</time> 
                   <time>06:00</time>
                   <time>09:00</time> 
                   <time>12:00</time>
                   <time>15:00</time>
                   <time>18:00</time>
                   <time>21:00</time>
                </div>
                <div className='img'>
                   <img className="imgL" src={storm} alt="storm icon" />
                   <img className="imgL" src={storm} alt="storm icon" />
                   <img className="imgL" src={storm} alt="storm icon" />
                   <img className="imgL" src={storm} alt="storm icon" />
                   <img className="imgL" src={storm} alt="storm icon" />
                   <img className="imgL" src={storm} alt="storm icon" />
                   <img className="imgL" src={storm} alt="storm icon" />
                </div>
                <div className='tempL'>
                     <p>8 ºC</p>                  
                     <p>8 ºC</p>
                     <p>8 ºC</p>
                     <p>8 ºC</p>
                     <p>8 ºC</p>
                     <p>8 ºC</p>
                     <p>8 ºC</p> 
                </div>
            </div>
        )
    }
}
export default WeatherL