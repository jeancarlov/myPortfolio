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

// note that the constructor needs to have the same parameters as the original class (name, age) I can declare new parameters for this class
class Lion extends Animal{
    constructor(name, age, furColor, speed){
        super(name, age);
        this.furColor= furColor;
        this.speed= speed;
    }

    roar(){
        console.log(
            'ROOAR',
            this.furColor,
            this.speed,
            'miles an hour!'
        );
        
    }
}

const lion1 = new Lion ('mufasa', 20, 'golden', 30);
lion1.speak();
lion1.roar();
console.log(lion1);

