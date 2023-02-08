import React, { useContext } from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown, BiShareAlt } from "react-icons/bi";
import logo from "../../assets/img/bmsfinal.png"

// Context
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {
    const { movie } = useContext(MovieContext);
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">
                        {movie.original_title}
                    </h3>
                </div>
                <div className=" w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    );
};

const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-13 h-9">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white rounded-md px-3 py-2" >
                        <BiSearch />
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-gray-300 text-xs flex items-center hover:text-white cursor-pointer">Jalna <BiChevronDown /></span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded ">Sign In</button>
                    <div className=" h-8 w-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

const MovieNavbar = () => {
    return <>
        <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:reltive lg:bg-bms-700 p-4">
            <div className="md:hidden">
                {/* Mobile Screen*/}
                <NavSm />
            </div>

            <div className="hidden md:block lg:hidden">
                {/*Tablet Devices*/}
                <NavSm />
            </div>

            <div className="hidden w-full lg:flex">
                {/*Large devices */}
                <NavLg />
            </div>

        </nav>
    </>;
};

export default MovieNavbar;