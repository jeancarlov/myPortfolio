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

    render(){
        const title = TITLES[this.state.titleIndex];

        return (
            <p> I am {title}</p>
        )
    }
}

export default Title;