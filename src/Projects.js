import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Projects extends Component {
    render(){
        return(
            <div>
                <h2> Highlighted Projects</h2>
                <div>
                    <div>{PROJECTS[0].title}</div>
                    <div>{PROJECTS[1].title}</div>
                    <div>{PROJECTS[2].title}</div>
                </div>
            </div>
        )
    }
}