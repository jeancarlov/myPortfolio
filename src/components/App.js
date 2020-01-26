import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import jcvpic from '../assets/jcvpic.jpg';
import Title from './Title';
import Jokes from './Jokes';
import Form from "../components/Form";
import WeatherTitles from "../components/WeatherTiles"
import WeatherTwo from "../components/WeatherTwo"



const API_KEY = "d3fb420c795be29b9317c50947d0c70a";
// Rule: don't modify the state directly within react, use setState to modify the state component
// previous notes are in previous commits
// Its best practice to use the class property and initializer syntax in order to initialize a method with in the component
// Use the class property and initializer syntax to refactor the constructor
// use the bind method for toggletDisplay to access the this object from the component
// note use the setState method because React make changes to setState before it triggers the render()
class App extends Component {
    // Class property and initializer syntax is a way to attach properties and methods to the (this) object of a class without having to use the a constructor
    state = { 
        displayBio: false,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
        const data = await api_call.json();
        if (city && country) {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the values."
          });
        }
      }

    // with the initializer I can now use the an arrow function to call the this.setstate 
    toggleDisplayBio = () => {
        this.setState({ displayBio : !this.state.displayBio });
    }

    render () {

        return(
         <div>
                
                <img src={jcvpic} alt= 'profile' className='jcvpic' style= {{width: 100, height: 100}} />
                <h1> Hello!</h1>
                <p>My name is Jean Carlo Valderrama</p> 
                <Title />
                <p> I enjoy coding as a habit</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p> I live in greater Orlando area, and code almost everyday.</p>
                            <p> My favorite language so far is Python but I am currently reactiving my love for ECMAScript</p>
                            <p> Besides coding, I love reading and working out for wellbeing</p>
                            <p> I am an advocator of mental awareness </p>
                            <p> My skills are concentraded in  Finance, Economics, and Programming </p>
                            <button onClick={this.toggleDisplayBio}>Showless </button>
                        </div>
                    ) : (
                        <div>
                            <button on onClick={this.toggleDisplayBio}> Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <hr />
                <Jokes />
                <hr />
                <WeatherTitles />
                <Form getWeather={this.getWeather} />
                <WeatherTwo 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                />


                
                
                
        </div>  
        )
    }
}

export default App;