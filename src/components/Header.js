import React from 'react';
import { Link } from 'react-router-dom';

//higher order component example: Header is now HOC
//Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

// HOC  component is going to to be passed down through the props  and then returns  that component via Jsx
// Use Child components to refactor the code, I am turning the Componet jsx to a child component
const Header = ({ children }) => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBotton:30
    };

    return(
        <div>
            <div>
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <h3 style={style}><Link to='/Contact'>Contact</Link></h3>
            </div>
            { children }
        </div>
        
    )
}

export default Header;