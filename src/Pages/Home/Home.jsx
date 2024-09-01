import React from 'react';
import { Link } from 'react-router-dom';
import HomeCalender from './HomeCalender';
import HomeMain from './HomeMain';

const Home = () => {
    return (
        <div>
            <Link to='/homemain'><HomeMain/></Link>
            <Link to='/homecalendar'>
            <HomeCalender></HomeCalender>
            </Link>
        </div>
    );
};

export default Home;