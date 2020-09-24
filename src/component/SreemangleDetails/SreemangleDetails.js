import React from 'react';
import Menu from '../Menu/Menu';
import './SreemangleDetails.css';
import { Button,Card, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SreemangleDetails = () => {
    return (
        <>

            <Menu></Menu>
            <div className = "SreemangleDetails">
                <h1>SREEMANGLE</h1>
                <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.</p>
            </div>
                <div className = 'FixDateSrimangal'>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <h6>Origin</h6>
                <FormControl type="text"  className="mr-sm-2" />
                <h6>Destination</h6>
                <FormControl type="text"  className="mr-sm-2" />
                {<Link to = {`/SrimangleHotel`}><Button variant="warning" >Booking</Button>{' '}{' '}</Link>}
                </Card.Body>
                </Card>
                </div>
        </>
    );
};

export default SreemangleDetails;