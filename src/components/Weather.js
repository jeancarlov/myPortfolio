import React, { Component} from 'react';

class Weather extends Component {
    state = { weather: {}}

    componentDidMount(){
        fetch('api.openweathermap.org/data/2.5/weather?q=Orlando,US&appid={key}a&units=imperial')
        .then((response) => console.log('response', response));
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default Weather

