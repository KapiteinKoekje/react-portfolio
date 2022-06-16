import React from "react";

const About = () => {
    return (
        <div
            name="Contacts"
            className="w-full h-screen bg-gradient-to-b from-blue-800 to-purple-700 text-slate-100"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 font-bold">
                    <p className="text-4xl border-b-4 inline">Contact info</p>
                </div>
                <p className="text-xl mt-2">
                    Email: gelderisoke@hotmail.nl <br />
                    Phone number: +31639624297
                </p>
            </div>
        </div>
    );
};

export default About;
