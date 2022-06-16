import React from "react";
import { Link } from "react-scroll";

const Header = () => {
    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Projects",
        },
        {
            id: 4,
            link: "Contacts",
        },
    ];

    return (
        <div className="flex justify-between py-4 items-center w-full h20 bg-black fixed text-slate-100">
            <h1 className="text-5xl py hidden md:flex">Gelder</h1>

            <ul className="flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="cursor-pointer px-4 hover:scale-110 duration-200"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
