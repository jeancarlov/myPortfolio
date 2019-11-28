import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App></App>, document.getElementById('root'));

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log('I am', this.name, 'and I am', this.age, 'years old');
        
    }
}

const animal1 = new Animal('simba',3);
animal1.speak();

console.log(animal1);
