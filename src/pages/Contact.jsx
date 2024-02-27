import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Contact() {
  return (
    <div className='pt-[90px] font-primary flex flex-col justify-center items-center'>
      <p className='text-[40px] font-bold'>Let's Chat.</p>
      <p className='text-[35px]'>Feel free to contact me!</p>
      <p className='text-[35px]'>Tell me about your project.</p>
      <p className='text-[15px] p-[25px] font-semibold'>Let's create something together!!</p>
      <div className='flex flex-col items-start py-[60px] md:py-0'>
        <div className='flex flex-row items-center'>
          <FaEnvelopeOpenText size={20} />
          <a href='madhuvarsha0608@gmail.com' className='p-[10px]'>madhuvarsha0608@gmail.com</a>
        </div>
        <div className='flex flex-row items-center'>
          <ImGithub size={20} />
          <a href='https://github.com/MadhuVarshaP' className='p-[10px]'>@MadhuVarshaP</a>
        </div>
        <div className='flex flex-row items-center'>
          <FaLinkedin size={20} />
          <a href='www.linkedin.com/in/madhu-varsha-p-a7ba26259' className='p-[10px]'>MADHU VARSHA P</a>
        </div>
        <div className='flex flex-row items-center'>
          <BsTwitterX size={20} />
          <a href='https://twitter.com/MadhuVarsha' className='p-[10px]'>@MadhuVarsha</a>
        </div>
      </div>
    </div>
  )
}

export default Contact