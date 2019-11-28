import React, { Component } from 'react';

class RegularClass {}
class ComponentClass extends Component{}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

// log the instance , and the actual object itself
console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);


class App extends Component {
    render(){
        return(
            <div>
                <h1> Hello!</h1>
                <p>My name is Jean Carlo Valderrama</p> 
                <p> I enjoy coding as a habit</p>
            </div>
        )
    }
}

export default App;