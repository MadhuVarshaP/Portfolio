import React from 'react'
import Education from './Education'

function About() {
  return (
    <div className='flex flex-col items-center py-[90px] bg-gray-100 font-primary'>
        <p className='text-[40px] font-bold ml-[490px] mr-auto'>About ME</p>
        <div className='w-[500px] text-left pt-[40px]'>
        Welcome to my corner of the digital universe! I'm an <span className='font-secondary'>18</span>-year-old web developer and enthusiastic student with a passion for crafting captivating online experiences. From tinkering with code to experimenting with design, I'm constantly honing my skills and pushing the boundaries of what's possible in the digital world.
        <br /><br />With a passion for innovation and a thirst for knowledge, I'm diving headfirst into the world of decentralized systems, smart contracts, and distributed applications.<br /><br />
        <span className='font-semibold'>P.S.</span> I'm still <span className='font-secondary'>18</span>, so I'm constantly learning and growing. Don't hesitate to offer feedback or suggestions – I appreciate your support!
        </div>
        <Education />

    </div>
  )
}

export default About