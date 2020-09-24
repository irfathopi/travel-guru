import React from 'react';
import { Button } from 'react-bootstrap';
import './SelectedDetails.css';



const SelectedDetails = () => {
    return (
        <div className = 'Details  '>
            <h1>COXS BAZAR</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world.</p>
            <Button variant="warning">Booking</Button>
        </div>
        
    );
};

export default SelectedDetails;