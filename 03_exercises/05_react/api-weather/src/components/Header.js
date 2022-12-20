import React from 'react';
const Header  = (props) =>{
        return(
            <header className='nav'>
                 <form onSubmit={props.getWeather}>
                    < div className="container">
                         <input type="text" placeholder='Type in a city name'/> 
                         <button className='search-btn'>FIND WEATHER</button>
                    </div>
                   </form>
            </header>
        )
}
export default Header