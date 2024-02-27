import React from 'react'
import frontend from '../images/frontend.png'
import js from '../images/js.png'
import webdesign from '../images/web-design.png'
import python from '../images/python.png'
import java from '../images/java.png'
import MySQL from '../images/sql.png'
import solidity from '../images/solidity.png'
import { SlCalender } from "react-icons/sl";
import { MdLocationPin } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiSolidity } from "react-icons/si";


function Experience() {
  return (
    <div className='pt-[90px] font-primary flex flex-col items-center justify-center'>
        <p className='font-bold text-[40px] pb-[40px]'>Experience</p>
      <div className='mb-[60px]'>  
        <div className='flex flex-col items-start p-[30px] border border-gray-200 rounded-lg shadow-md '>
          <p className='text-[25px]'>Web Developer</p>
          <p className='text-gray-500'>WSPL Solutions</p>
        <div className='flex flex-row space-x-4 '>
          <div className='flex flex-row items-center space-x-1 pr-[10px]'>
            <SlCalender size={15}/>
            <p>Ongoing</p>
          </div>
          <div className='flex flex-row items-center p-[10px]'>
            <MdLocationPin size={15}/>
            <p>Tiruchengode</p>
          </div>
        </div>
        </div>
        <div className='flex flex-col items-start p-[30px] my-[20px] border border-gray-200 rounded-lg shadow-md'>
          <p className='text-[25px]'>Front-End Developer</p>
          <p className='text-gray-500'>Starknet Hacker House</p>
        <div className='flex flex-row space-x-4 '>
          <div className='flex flex-row items-center space-x-1 pr-[10px]'>
            <SlCalender size={15}/>
            <p>December, 2023</p>
          </div>
          <div className='flex flex-row items-center p-[10px]'>
            <MdLocationPin size={15}/>
            <p>Bangalore</p>
          </div>
        </div>
        </div>
        <div className='flex flex-col items-start p-[30px] my-[20px] border border-gray-200 rounded-lg shadow-md'>
          <p className='text-[25px]'>Machine Learning</p>
          <p className='text-gray-500'>Corizo</p>
        <div className='flex flex-row space-x-4 '>
          <div className='flex flex-row items-center space-x-1 pr-[10px]'>
            <SlCalender size={15}/>
            <p>May-August, 2023</p>
          </div>
          <div className='flex flex-row items-center p-[10px]'>
            <MdLocationPin size={15}/>
            <p>Online</p>
          </div>
        </div>
        </div>
      </div>
      <div className='py-[50px] bg-gray-100 w-full flex flex-col items-center'>
        <p className='font-bold text-[40px]'>Skills</p>
        <p className='text-[20px] font-semibold py-[20px]'>Front-End Development</p>
        <img src={frontend} alt='front-end' className='h-[13px] w-[300px]' />
        <p className='text-[20px] font-semibold py-[20px]'>JavaScript</p>
        <img src={js} alt='js' className='h-[13px] w-[300px]' />
        <p className='text-[20px] font-semibold py-[20px]'>Web Design</p>
        <img src={webdesign} alt='Web-design' className='h-[13px] w-[300px]' />
        <p className='text-[20px] font-semibold py-[20px]'>Python</p>
        <img src={python} alt='Python' className='h-[13px] w-[300px]' />
        <p className='text-[20px] font-semibold py-[20px]'>C, Java</p>
        <img src={java} alt='Java' className='h-[13px] w-[300px]' />
        <p className='text-[20px] font-semibold py-[20px]'>MySQL</p>
        <img src={MySQL} alt='MySQL' className='h-[13px] w-[300px]' />
        <p className='text-[20px] font-semibold py-[20px]'>Solidity</p>
        <img src={solidity} alt='Solidity' className='h-[13px] w-[300px]' />
      </div>
      <div className='flex flex-col items-center my-[50px]'>
        <div className='grid grid-cols-4 gap-4 pt-[10px]'>
        <FaHtml5 size={40}/>
        <FaCss3Alt size={40}/>
        <FaReact size={40}/>
        <FaFigma size={40}/>
        </div>
        <div className='flex flex-row items-center pt-[10px]'>
        <p className='font-bold text-[20px] pr-[10px]'>|</p>
        <p className='font-bold text-[30px]'>TechStack</p>
        <p className='font-bold text-[20px] pl-[10px]'>|</p>
        </div>
        <div className='grid grid-cols-4 gap-4 pt-[10px]'>
        <FaBootstrap size={40}/>
        <SiTailwindcss size={40}/>
        <SiMysql size={40}/>
        <SiSolidity size={40}/>
        </div>
      </div>
    </div>
  )
}

export default Experience