import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='flex flex-col items-center pr-48 pt-20'>
        <div className='flex flex-col justify-start w-1/2 mb-6'>
            <Link to="/picturing-mexican-america">
                <h1 className='text-xl hover:underline'>Picturing Mexican America Website</h1>
            </Link>
            <p className='text-gray-500'>July 2023 - September 2023</p>
        </div>
        <div className='flex flex-col justify-start w-1/2 mb-6'>
            <Link to="/bruinwalk">
                <h1 className='text-xl hover:underline'>BruinWalk Linguistic Analysis</h1>
            </Link>
            <p className='text-gray-500'>November 2022 - January 2023</p>
        </div>
        <div className='flex flex-col justify-start w-1/2 mb-6'>
            <Link to="/mobiel-development">
                <h1 className='text-xl hover:underline'>Undergraduate Student Researcher/Mobile Developer</h1>
            </Link>
            <p className='text-gray-500'>April 2023 - June 2023</p>
        </div>
        <div className='flex flex-col justify-start w-1/2 mb-6'>
            <Link to="/spring-sing"> 
                <h1 className='text-xl hover:underline'>Spring Sing Email Automation</h1>
            </Link>
            <p className='text-gray-500'>November 2022 - January 2023</p>
        </div>
    </div>
  )
}

export default Projects;
