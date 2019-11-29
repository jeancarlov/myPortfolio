import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render() {
        console.log('this.props', this.props);
        return (
            <div>
                {this.props.project.title}
            </div>
        )
    }
}
 // Note: Props is a way for parent components to pass(data) to child components
 // Creat a key attribute to pass PROJECT.id and project attribute to pass the entire PROJECT index from the map(PROJECT)
 // notice that the project attribute is the same as the value from this.props.project.title because its the way props work
class Projects extends Component {
    render(){
        return(
            <div>
                <h2> Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map((PROJECT) => {
                            return(
                               <Project key={PROJECT.id} project={PROJECT} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;