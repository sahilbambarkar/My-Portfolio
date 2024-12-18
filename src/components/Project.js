import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GiPlayButton } from 'react-icons/gi';

function Project({ image, name, live, source, desc }) {
    return (
        <div className='flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg'>
            <img
                alt='project'
                src={image}
                className='rounded-md w-full h-48 object-top object-fill' 
            />
            <h1 className='text-xl font-bold text-[#ec6e59]'>{name}</h1>
            <p className='font-light leading-loose text-sm text-gray-300'>{desc}</p>
            <div className='flex gap-5 mt-2'>
                <a
                    href={live}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center bg-[#ec6e59] text-white px-4 py-2 rounded-md text-sm transition-scale hover:scale-105'
                >
                    <GiPlayButton className='w-6 h-6' /> Demo
                </a>
                <a
                    href={source}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-1 px-4 py-2 border border-black rounded-md text-sm bg-white dark:bg-gray-600 transition-scale hover:scale-105'
                >
                    <AiFillGithub className='w-6 h-6' /> Code
                </a>
            </div>
        </div>
    );
}

export default Project;
