import React, { Component } from 'react';



class App extends Component {
    constructor(){
    super();
       this.state = { displayBio: false }; 
    }

    render() {
        let bio = (
            <div>
                <p>I live in greater Orlando Area, and code almost everyday.</p>
                <p> My favorite language so far is python but I am currently reactiving my love for ECMASript</p>
                <p> Besides coding, I love reading and working out for wellbeing</p>
            </div>
        );

        if (!this.state.displayBio) {
            bio = null;
        }

        return(
         <div>
                <h1> Hello!</h1>
                <p>My name is Jean Carlo Valderrama</p> 
                <p> I enjoy coding as a habit</p>
                {bio} 
        </div>  
        )
    }
}

export default App;