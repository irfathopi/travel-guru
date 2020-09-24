import React from 'react';
import logo from '../../image/Icon/Logo.png';
import './Menu.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                            <input type="text" placeholder="Search your destination"/>
                    </li>
                    <li>
                       <a href="">News</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                    {<Link to = {`/logIn`}><Button variant="warning" >Log In</Button></Link>}
                    </li>
                    
                </ul>
            </nav>

        </div>
    );
};

export default Menu;