import React from 'react';
import myImage1 from './../assets/main.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Typewriter from './Typewriter';

function Main() {
    return (
        <div id="main" className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
                <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
                    <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
                        Hi,
                    </h1>
                    <blockquote className="font-[800] text-[2rem] text-[#ec6e59;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
                        I'm
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#ec6e59;] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#20262E]">Sahil</span>
                        </span>
                    </blockquote>
                    <div className="h-10 mt-4">
                        <Typewriter />
                    </div>
                    <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
                        As an ambitious Full-Stack Developer with a strong interest in multimedia design, I bring new ideas and a creative mindset to the table. Despite being new to the sector, I have earned great experience in website and app development, where I mix technical expertise with creative design talents to create amazing digital experiences. I thrive at graphic design, producing visually appealing and engaging multimedia content that increases user interaction and enjoyment.
                    </p>
                </div>
                <div className="flex py-[10px] tm:mt-[40px] items-start mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
                    <div className="box">
                        <div className="h-full justify-end flex items-center sm:justify-center">
                            <img
                                src={myImage1}
                                alt="main"
                                height={600} width={600}
                                className="w-full h-auto max-w-[600px] rounded-lg"
                             
                            />
                        </div>
                    </div>
                </div>
                <div className="flex place-content-center mt-7 sm:mt-0 sm:ml-5"> {/* Added space between image and icons */}
                    <div className="flex flex-row sm:flex-col gap-5">
                        <a rel="noreferrer" href="https://github.com/sahilbambarkar" target="_blank">
                            <AiFillGithub size={40} className="cursor-pointer" />
                        </a>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/sahil-bambarkar-7082632b2" target="_blank">
                            <AiFillLinkedin size={40} className="cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
