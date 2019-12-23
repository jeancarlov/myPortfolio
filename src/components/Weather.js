import React, { Component} from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          cities: []
        };
      }

    componentDidMount(){
        fetch('api.openweathermap.org/data/2.5/weather?q=Orlando,US&appid=d3fb420c795be29b9317c50947d0c70a&units=imperial')
        .then(res => console.log('response', res)
        )
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
           
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
    

    render() {
        return(
            <div>Cities</div>
        )
    }
}

export default Weather

