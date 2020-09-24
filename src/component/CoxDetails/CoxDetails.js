import React from 'react';
import FixDate from '../FixDate/FixDate';
import Menu from '../Menu/Menu';
import './CoxDetails.css';
import { Button,Card, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CoxDetails = () => {


    return (
        <>
            <Menu></Menu>
            <div className = 'CoxsDetails '>
                <h1>COXS BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world.</p>
                
            </div>
            <div className = 'FixDate'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <h6>Origin</h6>
                <FormControl type="text"  className="mr-sm-2" />
                <h6>Destination</h6>
                <FormControl type="text"  className="mr-sm-2" />
                {<Link to = {`/Hotel`}><Button variant="warning" >Booking</Button>{' '}{' '}</Link>}
                </Card.Body>
                </Card>
            </div>
            
        </>
    );
};

export default CoxDetails;