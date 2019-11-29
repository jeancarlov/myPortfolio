import React, { Component } from 'react';

// add a contructor key method and it gets fire when an instance of a class is create
// the constructor is use to attach a state object to the component using the (this)
// if the state object is undefined use the (super() ) to invoke the parent classes of the constructor method 
// state is add to control the display of bio
// change the null value  for jsx
// us ethe setStaste to update the values of a state

class App extends Component {
    constructor(){
    super();
       this.state = { displayBio: false }; 
       // console.log('component this', this);
       
       this.readMore = ()=> {
        // console.log('readMore this', this);
        
        this.setState({ displayBio: true});
       }
    }
    render() {

        return(
         <div>
                <h1> Hello!</h1>
                <p>My name is Jean Carlo Valderrama</p> 
                <p> I enjoy coding as a habit</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in greater Orlando Area, and code almost everyday.</p>
                            <p> My favorite language so far is python but I am currently reactiving my love for ECMASript</p>
                            <p> Besides coding, I love reading and working out for wellbeing</p>
                        </div>
                    ) : (
                        <div>
                            <button on onClick={this.readMore}> Read more</button>
                        </div>
                    )
                }
        </div>  
        )
    }
}

export default App;