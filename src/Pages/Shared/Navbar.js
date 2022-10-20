import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <img src={logo} class="h-6 w-8" alt="name" />
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                        <li><Link to="/">JOIN</Link></li>
                        <div class="form-control">
                            <input type="text" placeholder="Search" class="input input-bordered" />
                        </div>


                    </ul>
                </div>
                <a class=" uppercase text-3xl "> SLANG</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">

                    <li className='bg-black text-white'><Link to="/login">JOIN</Link></li>

                    <div class="form-control">
                        <input type="text" placeholder="Search listings or @users" class="input input-bordered" />
                    </div>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;