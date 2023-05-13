import React from 'react';
import { IoLogoHtml5 } from 'react-icons/io';
import { SiCss3, SiPowershell, SiWindows, SiCisco, SiJavascript, SiMysql, SiApachecassandra, SiMongodb, SiMicrosoftazure } from 'react-icons/si';
import { FaJava, FaPython } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandCSharp } from 'react-icons/tb';
import { AiFillAndroid, AiOutlineConsoleSql, AiFillGithub } from 'react-icons/ai';
import { FcLinux } from 'react-icons/fc';

const Hero = ({ heading, message }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <p className='py-5 text-4xl font-bold text-center'>My skills</p>
        
        {/* Splitting icons into two lines */}
        <div className='icons flex flex-wrap justify-center'>
          <IoLogoHtml5  className='text-orange-500 text-12xl hover:text-orange-700 cursor-pointer' 
          title='HTML'/>
          <SiCss3  title='CSS' className='text-blue-500 text-12xl hover:text-blue-700 cursor-pointer' />
          <SiJavascript
            className='text-yellow-500 text-12xl hover:text-yellow-700 cursor-pointer'
            title='Javascript'
          />          <FaJava title='JAVA' className='text-white text-12xl hover:text-gray-300 cursor-pointer' />
          <TbBrandNextjs title='Next.js' className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <AiFillAndroid title='Android Studio' className='text-green-500 text-12xl hover:text-green-300 cursor-pointer' />
          <AiOutlineConsoleSql title='SQL'className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <SiMysql  title='MySQL'className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <SiApachecassandra title='Cassandra'className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <SiMongodb title='MongoDB' className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
        </div>
        
        <div className='icons flex flex-wrap justify-center'>
          <FcLinux title='Linux'/>
          <TbBrandCSharp title='C#' className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <AiFillGithub  title='Github' className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <FaPython title='Python' className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <SiMicrosoftazure title='Microsoft Azure' className='text-blue-500 text-12xl hover:text-gray-300 cursor-pointer'/>
          <SiCisco title='Cisco' className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <SiWindows title='Windows 10' className='text-white text-12xl hover:text-gray-300 cursor-pointer'/>
          <SiPowershell title='Windows PowerShell' className='text-blue-400 text-12xl hover:text-gray-300 cursor-pointer'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
