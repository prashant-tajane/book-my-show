import React from 'react'
import Slider from 'react-slick';

//components
import Poster from '../Poster/Poster.component';

// Configs
import PosterCarousalSettings from '../../config/PosterCarousal.config';
import PremierImages from '../../config/tempposters.config';

const Premier = () => {

    return (
        <>
            <div className="flex flex-col items-start"> 
                <h3 className="text-white text-xl font-bold">Premieres</h3>
                <p className=" text-white text-sm">Brand New Release Every Friday</p>
            </div>
            
            <Slider {...PosterCarousalSettings}>
            {PremierImages.map((image)=>(
                <Poster {...image} isDark />
            ))}
            </Slider>
        </>
    );
};

export default Premier;