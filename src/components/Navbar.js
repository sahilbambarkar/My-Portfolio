import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    };

    const handleWindowResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 640 && showMenu) {
            setShowMenu(false);
        }
    };

    // Handle window resize for mobile view
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [showMenu]);

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Sahil_Resume.pdf'; 
        link.download = 'Resume_Sahil_Bamarkar.pdf'; // Set the name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="flex justify-between items-center py-[2rem] px-[3.5rem] sm:px-[1.5rem] relative">
                <img src="/logo..png" alt="Logo" height={100} width={100}  />
                <div className="flex-grow flex justify-center">
                    <ul className="hidden tm:block sm:block md:flex font-[400] text-black dark:text-white dark:font-[300] text-custom-20 gap-[5rem] md:gap-[3rem] lg:gap-4rem">
                        <a
                             className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                            onClick={() => scrollToComponent('skills')}
                        >
                            Skills
                        </a>
                        <a
                            href className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                            onClick={() => scrollToComponent('experience')}
                        >
                            Experience
                        </a>
                        <a
                            className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                            onClick={() => scrollToComponent('projects')}
                        >
                            Projects
                        </a>
                        <a
                            className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                            onClick={() => scrollToComponent('contact')}
                        >
                            Contact
                        </a>
                    </ul>
                </div>
                <div className="flex items-center">
                    <button
                        className="ml-4 bg-[#ec6e59] text-white rounded px-4 py-2 hover:bg-[#d95e51]"
                        onClick={downloadResume}
                    >
                        Download Resume
                    </button>
                    <div className="tm:hidden sm:hidden absolute top-[2rem] right-[3.5rem]">
                        <GiHamburgerMenu
                            className="h-6 w-6 cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    </div>
                </div>
                {showMenu && (
                    <ul className="flex flex-col font-[400] text-black dark:font-[300] text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
                        <a
                            className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                            onClick={() => scrollToComponent('skills')}
                        >
                            Skills
                        </a>
                        <a
                            className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                            onClick={() => scrollToComponent('experience')}
                        >
                            Experience
                        </a>
                        <a
                            className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                            onClick={() => scrollToComponent('projects')}
                        >
                            Projects
                        </a>
                        <a
                            className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400]"
                            onClick={() => scrollToComponent('contact')}
                        >
                            Contact
                        </a>
                        <button
                            className="tracking-wider font-[400] bg-[#ec6e59] text-white rounded px-4 py-2 hover:bg-[#d95e51]"
                            onClick={downloadResume}
                        >
                            Download Resume
                        </button>
                    </ul>
                )}
            </div>
        </>
    );
}

export default Navbar;