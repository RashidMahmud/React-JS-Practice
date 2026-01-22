import React from 'react'
import { Link, Outlet } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <nav className='w-full mt-5'>
        <ul className='max-w-[90vw] flex flex-wrap justify-between mx-auto'>
            <a href=""className='font-semibold text-2xl'>Dev-Rashid</a>
            <div className='flex [&>li]:pl-7'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="About">About</Link></li>
                <li><Link to="Contact">Contact</Link></li>
                <li><Link to="Signup">Signup</Link></li>
            </div>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar;