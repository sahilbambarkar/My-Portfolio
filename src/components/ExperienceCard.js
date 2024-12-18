import React from 'react';

function Experience({ org, title, date, description }) {
  return (
    <div className='flex flex-col mt-10 items-center justify-center px-4 sm:px-0'>
      <div className='bg-gray-800 shadow-lg rounded-lg p-6 w-full sm:w-[90%] lg:w-[80%]'>
        <div className='flex flex-col sm:flex-row gap-6 relative'>
         
          <div className='flex flex-col items-start'>
            <h1 className='text-xl font-semibold text-white mb-1'>{org}</h1>
            <h3 className='text-sm text-gray-400'>{date}</h3>
          </div>

          
          <div className='flex items-center justify-center relative'>
            <div className='flex flex-col items-center'>
              <div className='m-1 bg-[#ec6e59] p-3 rounded-full'></div>
              
              <div className='border-l-2 border-dotted border-gray-400 h-full' style={{ height: '50px' }}></div>
            </div>
          </div>

         
          <div className='flex flex-col mt-1'>
            <h1 className='text-lg font-semibold text-white'>{title}</h1>
            <p className='font-light text-gray-300 leading-relaxed text-sm sm:text-base'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
