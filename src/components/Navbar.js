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

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [showMenu]);

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Sahil__Resume.pdf';
        link.download = 'Sahil_Bamarkar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="flex justify-between items-center py-[2rem] px-[3.5rem] sm:px-[1.5rem] relative">
                <img src="/logo.jpg" alt="Logo" height={75} width={75} />
                <div className="flex-grow flex justify-center">
                    <ul className="hidden tm:block sm:block md:flex font-[400] text-white text-custom-20 gap-[5rem] md:gap-[3rem] lg:gap-4rem">
                        {['skills', 'experience', 'projects', 'contact'].map((section) => (
                            <a
                                key={section}
                                className="tracking-wider relative font-[400] after:absolute after:w-full after:h-[2px] after:left-0 after:bottom-[-2px] after:bg-[#ec6e59] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                                onClick={() => scrollToComponent(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </ul>
                </div>
                <div className="hidden tm:block sm:block">
                    <button
                        className="ml-4 bg-[#ec6e59] text-white rounded px-4 py-2 hover:bg-[#d95e51]"
                        onClick={downloadResume}
                    >
                        Download Resume
                    </button>
                </div>
                <div className="tm:hidden sm:hidden absolute top-[2rem] right-[3.5rem]">
                    <GiHamburgerMenu
                        className="h-6 w-6 cursor-pointer text-white"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                </div>
                {showMenu && (
                    <ul className="flex flex-col font-[400] text-white gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-gray-800 p-4 shadow-md rounded">
                        {['skills', 'experience', 'projects', 'contact'].map((section) => (
                            <a
                                key={section}
                                className="tracking-wider relative font-[400] after:absolute after:w-full after:h-[2px] after:left-0 after:bottom-[-2px] after:bg-[#ec6e59] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                                onClick={() => {
                                    setShowMenu(false);
                                    scrollToComponent(section);
                                }}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                        <button
                            className="tracking-wider font-[400] bg-[#ec6e59] text-white rounded px-4 py-2 hover:bg-[#d95e51]"
                            onClick={() => {
                                setShowMenu(false);
                                downloadResume();
                            }}
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
