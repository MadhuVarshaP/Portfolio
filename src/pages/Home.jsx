import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Education from './Education'

function Home() {
  return (
    <div className='pt-[90px]'>
      <div className='font-primary flex flex-col justify-center items-center h-screen'>
        <p className='text-[25px]'>Hey!</p>
        <p className='text-[40px] font-bold'><span className='italic text-[30px] font-normal'>I'm</span> Madhu Varsha</p>
        <p className='text-[20px]'>WEB | BLOCKCHAIN DEVELOPER </p>
        <div className='flex p-[50px] space-x-6'>
            <Link to='/about' className='text-[10px] border border-black py-[7px] px-[10px] font-semibold rounded-2xl my-[15px] w-[100px] hover:bg-black hover:text-white'>ABOUT ME</Link>
            <Link to='/contact' className='text-[10px] border border-black py-[7px] px-[10px] font-semibold rounded-2xl my-[15px] w-[100px] bg-black text-white hover:text-black hover:bg-white'>CONTACT ME</Link>
        </div>
      </div>
        <About />
        
    </div>
  )
}

export default Home