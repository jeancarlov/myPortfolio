import React, { Component} from 'react';

const  Temp =({ city: { id, name } }) => (
    <p style={{ margin: 20 }}>{id} <em>{name}</em></p>
  )
class Weather extends Component {
    state = { city: {}, cities: []}

    componentDidMount() {
        fetch('api.openweathermap.org/data/2.5/weather?q=Orlando,US&appid={key}a&units=imperial')
          .then(response => response.json())
          .then(json => this.setState({ city: json }))
          .catch(error => alert(error.message));
      }
    
      fetchJokes = () => {
        fetch('api.openweathermap.org/data/2.5/weather?q=Orlando,US&appid={key}a&units=imperial')
          .then(response => response.json())
          .then(json => this.setState({ cities: json }))
          .catch(error => alert(error.message));
      }

    render() {
        return(
            <div>
            <h2>Highlighted Joke</h2>
            <Weather city={this.state.city} />
            <hr />
          </div>
        )
    }
}

export default Weather
