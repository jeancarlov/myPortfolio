import React, { Component } from 'react';
// Rule: don't modify the state directly within react, use setState to modify the state component
// previous notes are in previous commits
// use the bind method to bind the this object from the component to the helper method 
// use toggleDisplaybio this play to refactor the helper methods => readMore() and Showless 

class App extends Component {
    constructor(){
    super();
       this.state = { displayBio: false }; 
       // console.log('component this', this);
       
       this.toggleDisplayBio =this.toggleDisplayBio.bind(this);
    }
    // helper methods got refactor to toggleDisplay bio
    // make sure toggleDisplayBio has access to the this object from the component
    // use the bind method for toggletDisplay to access the this object from the component
    
    toggleDisplayBio(){
        this.setState({ displayBio : !this.state.displayBio });
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
                            <button onClick={this.toggleDisplayBio}>Showless </button>
                        </div>
                    ) : (
                        <div>
                            <button on onClick={this.toggleDisplayBio}> Read more</button>
                        </div>
                    )
                }
        </div>  
        )
    }
}

export default App;