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
                    Currently doing Open-IT. Enjoying it alot so far. Hope to
                    get an interesting career out of this
                </p>
                <br />
                <p className="text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse, facere quo voluptates illum recusandae blanditiis
                    sapiente sit quod asperiores porro! Aliquam voluptatem
                    tenetur, quasi doloribus blanditiis odit expedita optio
                    sunt?
                </p>
            </div>
        </div>
    );
};

export default About;
