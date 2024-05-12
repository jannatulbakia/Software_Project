import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex gap-5'>
            <Link to='/'>Home</Link>
            <Link to ='/destination'>Destination</Link>
        </div>
    );
};

export default NavBar;