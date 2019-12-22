import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import jcvpic from '../assets/jcvpic.jpg';
import Title from './Title';


// Rule: don't modify the state directly within react, use setState to modify the state component
// previous notes are in previous commits
// Its best practice to use the class property and initializer syntax in order to initialize a method with in the component
// Use the class property and initializer syntax to refactor the constructor
// use the bind method for toggletDisplay to access the this object from the component
// note use the setState method because React make changes to setState before it triggers the render()
class App extends Component {
    // Class property and initializer syntax is a way to attach properties and methods to the (this) object of a class without having to use the a constructor
    state = { displayBio: false};
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
                            <p>I live in greater Orlando Area, and code almost everyday.</p>
                            <p> My favorite language so far is python but I am currently reactiving my love for ECMASript</p>
                            <p> Besides coding, I love reading and working out for wellbeing</p>
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
                
        </div>  
        )
    }
}

export default App;