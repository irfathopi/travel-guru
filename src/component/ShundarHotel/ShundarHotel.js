import React from 'react';
import bed1 from '../../image/Rectangle26.png'
import bed2 from '../../image/Rectangle27.png'
import bed3 from '../../image/Rectangle28.png';


const ShundarHotel = () => {
    return (
        <>
        <div className = "Rooms">
            <p>252 Stays April 13-17 3 guests</p>
            <h2>Stay In Shundarban</h2>
                <div className = "leftdiv">
                    

                    <div className = "gap-b-bed">
                        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${bed2})`}} className ="bed1">
                        <img src="" alt=""/>
                        </div>
                        <div className = "bedDetails">
                        <h6>Apertment in lost panaroma</h6>
                        <p>4 Guests 2 Bathroom 2 beds 2 baths</p>
                        <p>Wif air conditioning kitchen Cancellation fexibility available</p>
                        <p>3.8(10) $52/night</p>
                        </div>
                    </div>

                    <div className = "gap-b-bed">
                        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${bed3})`}} className ="bed1">
                        <img src="" alt=""/>
                        </div>
                        <div className = "bedDetails">
                        <h6>AR Launge & pool</h6>
                        <p>4 Guests 2 Bathroom 2 beds 2 baths</p>
                        <p>Wif air conditioning kitchen Cancellation fexibility available</p>
                        <p>4.9(25) $44/night </p>
                        </div>
                    </div>

                    <div className = "gap-b-bed">
                        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${bed1})`}} className ="bed1">
                        </div>
                        <div className = "bedDetails">
                        <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p>4 Guests 2 Bathroom 2 beds 2 baths</p>
                        <p>Wif air conditioning kitchen Cancellation fexibility available</p>
                        <p>4.9(20)    $34/night </p>
                        </div>
                    </div>

                </div>
        </div>
        <div className = "Map"  ClassName = "mapPic" >
            
        </div>
        </>
    );
};

export default ShundarHotel;