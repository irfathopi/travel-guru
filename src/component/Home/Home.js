import Menu from '../Menu/Menu';
import React from 'react';
import Places from '../Places/Places';
import SelectedDetails from '../SelectedDetails/SelectedDetails';



const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <SelectedDetails></SelectedDetails>
            <Places></Places>
        </div>
    );
};

export default Home;