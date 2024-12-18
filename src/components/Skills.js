import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap, FaNode, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiJavascript, SiExpress, SiPostgresql, SiTypescript, SiTailwindcss, SiCanva, SiAdobephotoshop, SiFirebase } from "react-icons/si";
import { TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";
import { DiMaterializecss, DiMongodb, DiNetbeans, DiVisualstudio } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { BiLogoVisualStudio } from "react-icons/bi";

function Skills() {
    return (
        <div className="p-8 bg-gray-900 text-white font-sans">
            <section id="skills">
                <h2 className="text-4xl font-bold mb-6">Skills</h2>

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Frontend Skills */}
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <Skill icon={<FaHtml5 size={30} />} name="HTML" />
                            <Skill icon={<FaCss3Alt size={30} />} name="CSS" />
                            <Skill icon={<SiJavascript size={30} />} name="JavaScript" />
                            <Skill icon={<FaReact size={30} />} name="React" />
                            <Skill icon={<TbBrandReactNative size={30} />} name="React Native" />
                            <Skill icon={<FaAngular size={30} />} name="Angular" />
                            <Skill icon={<SiTailwindcss size={30} />} name="Tailwind CSS" />
                            <Skill icon={<DiMaterializecss size={30} />} name="ShadcnUi" />
                            <Skill icon={<FaBootstrap size={30} />} name="Bootstrap" />
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Backend</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <Skill icon={<FaNode size={30} />} name="Node.js" />
                            <Skill icon={<SiExpress size={30} />} name="Express.js" />
                            <Skill icon={<GrMysql size={30} />} name="MySQL" />
                            <Skill icon={<DiMongodb size={30} />} name="MongoDB" />
                            <Skill icon={<SiFirebase size={30} />} name="Firebase" />
                            <Skill icon={<SiPostgresql size={30} />} name="PostgreSQL" />
                        </div>
                    </div>
                </div>

                {/* Bottom Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Languages */}
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <Skill icon={<FaPython size={30} />} name="Python" />
                            <Skill icon={<FaJava size={30} />} name="Java" />
                            <Skill icon={<SiTypescript size={30} />} name="TypeScript" />
                            <Skill icon={<SiJavascript size={30} />} name="JavaScript" />
                            <Skill icon={<TbBrandCSharp size={30} />} name="C#" />
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Tools</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <Skill icon={<BiLogoVisualStudio size={30} />} name="VS Code" />
                            <Skill icon={<FaGithub size={30} />} name="GitHub" />
                            <Skill icon={<DiNetbeans size={30} />} name="NetBeans" />
                            <Skill icon={<SiAdobephotoshop size={30} />} name="Photoshop" />
                            <Skill icon={<SiCanva size={30} />} name="Canva" />
                            <Skill icon={<DiVisualstudio size={30} />} name="Visual Studio" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Skill({ icon, name }) {
    return (
        <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-500 transition duration-300 cursor-pointer shadow">
            <div className="flex justify-center mb-2 text-[#ec6e59]">{icon}</div>
            <p className="text-sm font-semibold">{name}</p>
        </div>
    );
}

export default Skills;
