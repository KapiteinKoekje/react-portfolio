import React from "react";
import cat from "../assets/cat.png";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="Home"
            className="h-screen w-full bg-gradient-to-b from-purple-700 to-blue-800 text-slate-100"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center">
                    <img
                        src={cat}
                        alt="catfoto"
                        className="mx-auto w-2/3 md:w-full"
                    ></img>
                </div>
                <div>
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="text-4xl sm:text-6xl font-bold">
                            I'm a student at Hogeschool Utrecht
                        </h2>
                        <p className="text-gray-200 py-4 max-w-md">
                            Currently i have worked with python, Javascript,
                            postgresql, html and css.
                        </p>
                    </div>

                    <Link
                        to="Projects"
                        smooth
                        duration={500}
                        className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
                    >
                        Projects
                        <span className="group-hover:rotate-90 duration-200">
                            <TiArrowRightOutline />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
