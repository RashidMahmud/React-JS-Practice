import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <nav className='fixed w-full'>
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
    </>
  )
}

export default Navbar;