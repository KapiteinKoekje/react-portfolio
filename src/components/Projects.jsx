import React from "react";
import cat from "../assets/cat.png";
import PG from "../assets/PG.png";
import Python from "../assets/Python.jpg";
import node from "../assets/nodejs.png";
import react from "../assets/react.png";

const Projects = () => {
    const projects = [
        {
            id: 1,
            img: PG,
            link: "https://google.com",
            projectName: "PG Enums",
        },
        {
            id: 2,
            img: Python,
            link: "https://google.com",
            projectName: "NS-Reisapp",
        },
        {
            id: 3,
            img: node,
            link: "https://google.com",
            projectName: "Node API",
        },
        {
            id: 4,
            img: react,
            link: "https://google.com",
            projectName: "React Website",
        },
        {
            id: 4,
            img: cat,
            link: "https://google.com",
            projectName: "Webscraping Bot",
        },
    ];

    return (
        <div
            name="Projects"
            className="h-screen w-full bg-gradient-to-b from-purple-700 to-blue-800 text-slate-100 md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="flex flex-col justify-center items-center pb-8">
                    <p className="text-4xl font-bold inline border-b-4">
                        Projects
                    </p>
                    <p className="py-6">Some of the projects i worked on</p>
                </div>
                <div className="w-full grid grid-cols-3 gap-8">
                    {projects.map(({ id, img, link, projectName }) => (
                        <div className="bg-black rounded-lg w-5/6 border-solid border-2">
                            <img
                                key={id}
                                src={img}
                                alt=""
                                className="  h-4/5 rounded-md"
                            ></img>
                            <div className="flex items-center justify-center">
                                <a href={link}>
                                    <button className="text-2xl hover:scale-125 duration-200 my-2 rounded-md">
                                        {projectName}
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
