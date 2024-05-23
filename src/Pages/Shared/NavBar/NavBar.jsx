import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <div className=' text-right m-4'>
          <Link className="btn btn-outline btn-success" to ='/signup'>SignUp</Link>
            
        </div>
        
        <div className='flex'>
            <img src="logo.jpg" alt="" />
            <h1 className='p-2 font-bold text-4xl'>BD destination dairies</h1>
        </div>  
        <div className='text-center justify-center flex gap-5'>
                <Link className="btn btn-outline btn-success" to='/'>Home</Link>
                <Link className="btn btn-outline btn-success" to='/destination'>Destination</Link>
                <Link className="btn btn-outline btn-success" to='/contact'>Contacts</Link>
            </div>
        </>
    );
};

export default NavBar;