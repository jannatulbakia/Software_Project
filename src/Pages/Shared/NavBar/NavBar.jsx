import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        // <>


        // <div className='flex'>
        //     <img src="logo.jpg" alt="" />
        //     <h1 className='p-1 font-bold text-3xl'>BD destination dairies</h1>
        //     <div className=' text-right m-4'>
        //   <Link className="btn btn-outline btn-success" to ='/signup'>SignUp</Link>

        // </div>
        // </div>  

        // <div className='text-center justify-center flex gap-5'>
        //         <Link className="btn btn-outline btn-success" to='/'>Home</Link>
        //         <Link className="btn btn-outline btn-success" to='/destination'>Destination</Link>
        //         <Link className="btn btn-outline btn-success" to='/contact'>Contacts</Link>
        // </div> 

        // </>
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className="btn btn-outline btn-success" to='/'>Home</Link></li>
                            <li> <Link className="btn btn-outline btn-success" to='/destination'>Destination</Link></li>
                            <li><Link className="btn btn-outline btn-success" to='/contact'>Contacts</Link></li>

                        </ul>
                    </div>
                    <img src="logo.jpg" alt="" />
                    <h1 className='p-1 font-bold text-3xl'>BD destination dairies</h1>
                </div >
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className="btn btn-outline btn-success" to='/'>Home</Link></li>
                        <li> <Link className="btn btn-outline btn-success" to='/destination'>Destination</Link></li>
                        <li><Link className="btn btn-outline btn-success" to='/contact'>Contacts</Link></li>
                        <li><Link className="btn btn-outline btn-success" to='/helplines'>Helplines</Link></li>

                    </ul>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="logo.jpg" />
                        </div>
                    </div>

                    <div className="navbar-end">
                        <li>
                            <details>
                                <summary>Register</summary>
                                <ul className="p-2">
                                    <li><Link className="btn btn-outline btn-success" to="login">Login</Link></li>
                                    <li><Link className="btn btn-outline btn-success" to="signup">Sign up</Link></li>
                                </ul>
                            </details>
                        </li>
                    </div>
                </div>
            </div>
            );
};

            export default NavBar;