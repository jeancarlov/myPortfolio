import React, { Component } from 'react';
import PROJECTS from './data/projects';

// Use js destructuring to access the this.props.project.title,description, image for code efficiency
class Project extends Component{
    render() {
        console.log('this.props', this.props);
        const { title, image, description, link } =this.props.project;

        return (
            <div>
                <h3>{title}</h3>
                <img src={image} alt= 'profile'/>
                <p>{description}</p>
                <a href = {link}>{link}</a>
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