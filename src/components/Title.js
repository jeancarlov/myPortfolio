import React, { Component } from 'react';

const TITLES = [
    'a Code lover',
    'a Book reader',
    'a Soccer player',
    'a Gym guy',
    'a Passionate about life',
    'a Life is interesting'
]

class Title extends Component{
    state = { titleIndex : 0 };

    //normal class method syntax 
    componentDidMount(){
        console.log('title component has mounted');

        this.animateTiles();
    }
    componentWillUnmount(){
        console.log('Title component will unmount');
        clearInterval(this.titleInterval);
    }
    animateTiles= () => {
        this.titleInterval = setInterval (() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex });
        }, 4000);
        console.log('this.titleInterval', this.titleInterval);
        
    }
    render(){
        const title = TITLES[this.state.titleIndex];

        return (
            <p> I am {title}</p>
        )
    }
}

export default Title;