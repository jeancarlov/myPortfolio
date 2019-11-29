import React, { Component } from 'react';

// previous notes are in previous commits
// use toggle this play to refactor the helper methods => readMore() and Showless 

class App extends Component {
    constructor(){
    super();
       this.state = { displayBio: false }; 
       // console.log('component this', this);
       
       this.readMore =this.readMore.bind(this);
    }
    // helper method
    readMore(){
        console.log('readmore this wuth the bind method in practice', this);
        this.setState({ displayBio: true });
    }

    showLess(){
        this.setState({ displayBio : false})
    }

    //toggleDisplayBio

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