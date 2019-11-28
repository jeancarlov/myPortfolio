import React, { Component } from 'react';



class App extends Component {
    constructor(){
    super();
       this.state = { displayBio: false }; 
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
                    ) : null
                }
        </div>  
        )
    }
}

export default App;