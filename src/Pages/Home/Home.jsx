import React from 'react';
import { Link } from 'react-router-dom';
import HomeCalender from './HomeCalender';

const Home = () => {
    return (
        <div>
            <p>home</p>
            <Link to='/homecalendar'>
            <HomeCalender></HomeCalender>
            </Link>
        </div>
    );
};

export default Home;