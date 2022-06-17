import React from "react";

const About = () => {
    return (
        <div
            name="About"
            className="w-full h-screen bg-gradient-to-b from-blue-800 to-purple-700 text-slate-100"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 font-bold">
                    <p className="text-4xl border-b-4 inline">About me</p>
                </div>
                <p className="text-xl mt-2">
                    My name is Gelder van den Brink. I'm currently following the
                    bachelors "Open-IT" at Hogeschool Utrecht. I have worked on
                    a bunch of projects in which i have used Databases made
                    websites and built an API.
                </p>
            </div>
        </div>
    );
};

export default About;
