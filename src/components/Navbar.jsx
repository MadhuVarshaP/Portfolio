import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-row space-x-10  w-full fixed justify-center h-[70px] items-center font-primary bg-black text-white'> 
        <Link to='/' className='hover:font-bold '>Home</Link>
        <Link to='/experience' className='hover:font-bold '>Experience</Link>
        <Link to='/project' className='hover:font-bold '>Projects</Link>
        <Link to='/contact' className='hover:font-bold '>Contact</Link>
    </div>
  )
}

export default Navbar