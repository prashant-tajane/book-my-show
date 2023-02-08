import React from "react";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroSlider from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroSlider />
            {props.children}
        </>

    );
};

export default DefaultLayout;