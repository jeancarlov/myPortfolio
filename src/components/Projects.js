import React from 'react';
import PROJECTS from '../data/projects';


// stateless functional component, notice that props became the input in the stateless fn component also because there is not need to use this when arrow fn is in play 
// notice that a component that doesn't have state can be turn into stateless syntax 
const Project = props => {
    const { title, image, description, link, website } =props.project;

    return (
       
        <div style={{ display: 'inline-block', width: 400, margin: 10}}>
            <h3>{title}</h3>
            <img src={image} alt= 'profile' style= {{width: 200, height: 120}}/>
            <p>{description}</p>
            <a target="_blank" href = {website}>{website}</a>
            <br></br>
            <a target="_blank" href = {link}>{link}</a>
            
        </div>
      
    )
}

 // Note: Props is a way for parent components to pass(data) to child components
 // Creat a key attribute to pass PROJECT.id and project attribute to pass the entire PROJECT index from the map(PROJECT)
 // notice that the project attribute is the same as the value from this.props.project.title because its the way props work
const Projects = () => (
   
    <div>
        <h2> Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map((PROJECT) => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
   
)


export default Projects;