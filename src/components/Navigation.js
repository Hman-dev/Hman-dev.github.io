import React from 'react';
import {NavLink} from "react-router-dom";

// On fait appelle à Navlink dans import qui va nous permettre de naviguer de pages en pages.
// le NavLink c'est comme une encore <a>en html.
// React permet d'identifier facilement sur quelle page on navigue avec la fonction activeClassNave 

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="/a-propos" activeClassName="nav-active">
                À propos
            </NavLink>
        </div>
    );
};

export default Navigation;