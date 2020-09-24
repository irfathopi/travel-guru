import React from 'react';
import FixDate from '../FixDate/FixDate';
import Menu from '../Menu/Menu';
import './SundarbanDetails.css';
import { Button,Card, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SundarbanDetails = () => {
    return (
        <>
        <Menu></Menu>
        <div className = 'SundarbanDetails'>
            <h1>Sundarban</h1>
            <p>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out..</p>
        </div>
            <div className = 'FixDateSundar'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <h6>Origin</h6>
                <FormControl type="text"  className="mr-sm-2" />
                <h6>Destination</h6>
                <FormControl type="text"  className="mr-sm-2" />
                {<Link to = {`/ShundarHotel`}><Button variant="warning" >Booking</Button>{' '}{' '}</Link>}
                </Card.Body>
                </Card>
            </div>
        </>
    );  
};

export default SundarbanDetails;