import React from 'react';
import logo from '../../image/Icon/Logo.png';
import './Navbar.css';
import { Button,FormControl,Form } from 'react-bootstrap';




const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                            <input type="text"/>
                    </li>
                    <li>
                       <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <Button variant="warning">Log In</Button>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;