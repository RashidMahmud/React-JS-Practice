import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <nav className='w-full mt-5'>
        <ul className='max-w-[90vw] flex flex-wrap justify-between mx-auto'>
            <a href=""className='font-semibold text-2xl'>Dev-Rashid</a>
            <div className='flex [&>li]:pl-7'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="About">About</NavLink></li>
                <li><NavLink to="Contact">Contact</NavLink></li>
                <li><NavLink to="Signup">Signup</NavLink></li>
            </div>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar;