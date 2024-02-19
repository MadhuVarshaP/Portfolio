import React from 'react'


function Projects() {
  return (
    <div className='pt-[90px] font-primary'>
      <p className='font-bold text-[40px]'>My Projects</p>
      <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center justify-center p-[10px] my-[20px] w-[350px] border border-gray-200 rounded-lg shadow-md'>
        <p className='text-[30px] font-bold pt-[10px]'>Resto-Cafe</p>
        <a href='https://github.com/MADHUthecoder/Foodapp' className='pt-[10px]'>Github</a>
        <div className='flex flex-row space-x-3 pt-[10px]'>
          <button className='border border-gray-200 bg-gray-200 rounded-xl px-[10px]'>ReactJS</button> 
          <button className='border border-gray-200 bg-gray-200 rounded-xl px-[10px]'>TailwindCSS</button>
        </div>
        <div className='flex flex-col items-start'>
        <ul className='p-[20px] list-disc'>
          <li className='text-left'>Allows users to search for restaurants, view restaurant details and make reservations.</li>
          <li className='text-left'>It makes the user to feel more comfortable by ordering the food.</li>
         </ul>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center p-[10px] my-[20px] w-[350px] border border-gray-200 rounded-lg shadow-md'>
        <p className='text-[30px] font-bold pt-[10px]'>LinkedIn Clone</p>
        <a href='https://github.com/MADHUthecoder/Linkedin-clone' className='pt-[10px]'>Github</a>
        <div className='flex flex-row space-x-3 pt-[10px]'>
          <button className='border border-gray-200 bg-gray-200 rounded-xl px-[10px]'>ReactJS</button> 
          <button className='border border-gray-200 bg-gray-200 rounded-xl px-[10px]'>TailwindCSS</button>
        </div>
        <div className='flex flex-col items-start'>
        <ul className='p-[20px] list-disc'>
          <li className='text-left'>A Social networking platform to connect with professionals.</li>
          <li className='text-left'>Allows to search for and apply for jobs, get information about companies you're interested in, and much more.</li>
         </ul>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center p-[10px] my-[20px] w-[350px] border border-gray-200 rounded-lg shadow-md'>
        <p className='text-[30px] font-bold pt-[10px]'>Learn4Tomorrow</p>
        <a href='https://github.com/MADHUthecoder/L4T' className='pt-[10px]'>Github</a>
        <div className='flex flex-row space-x-3 pt-[10px]'>
          <button className='border border-gray-200 bg-gray-200 rounded-xl px-[10px]'>ReactJS</button> 
          <button className='border border-gray-200 bg-gray-200 rounded-xl px-[10px]'>Bootstrap</button>
        </div>
        <div className='flex flex-col items-start'>
        <ul className='p-[20px] list-disc'>
          <li className='text-left'>A freelancing website connecting clients and freelancers from across the globe.</li>
          <li className='text-left'>It's a platform where freelancers can have a better profile.</li>
         </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects