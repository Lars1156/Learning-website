import React from "react";
import{NavLink} from 'react-router-dom';

export function Navbar(){
    return(
        <div className="Navbar-container">
            <nav className="Nav-header">
                <ul>
                    <li className="nav-item">
                        <NavLink to ="/">Home</NavLink> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}
