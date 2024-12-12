import React, { useState } from 'react';
import Project from './Project';
import data from './../data/projectsData.js'; // Ensure this path is correct

function Projects() {
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 projects

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 3); // Show 3 more projects on button click
  };

  return (
    <div id='projects' className='p-8 mt-4'>
      <h1 className='mb-4 tracking-wider font-semibold text-3xl'>Few Projects</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {data.ProjectsData.slice(0, visibleCount).map((project) => (
          <Project
            key={project.id}
            image={project.img}
            name={project.name}
            live={project.live}
            source={project.source}
            desc={project.description}
          />
        ))}
      </div>

      {/* Centered View More Button */}
      <div className='flex justify-center mt-6'>
        {visibleCount < data.ProjectsData.length && (
          <button
            onClick={handleShowMore}
            className='bg-[#ec6e59] text-white px-4 py-2 rounded-md hover:bg-[#d95e51]'
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;
