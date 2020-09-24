import React from 'react';
import  './Places.css';
import bg from '../../image/Rectangle1.png'
import bg1 from '../../image/sundorbon.png'
import bg2 from '../../image/Sreemongol.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Places = () => {
    return (
        <div className = "PlaceCard">

            <div onclick="myFunction()" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${bg1})`}} className ="placePic" >
            <h4>SUNDARBAN</h4>
            {<Link to = {`/Sundarban`}><Button variant="success">Details..</Button>{' '}</Link>}
            </div>

        
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${bg})`}} className ="placePic" >
            <h4>COX BAZAR</h4>
            {<Link to = {`/Coxs`}><Button variant="success">Details..</Button>{' '}</Link>}
            </div>

            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${bg2})`}} className ="placePic">
            <h4>SREEMANGLE</h4>
            {<Link to = {`/Sreemangle`}><Button variant="success">Details..</Button>{' '}</Link>}
            </div>
        </div>
    );
};

export default Places;