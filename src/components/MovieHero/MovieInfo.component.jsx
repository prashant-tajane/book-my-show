import React, { useContext, useState} from 'react';
import { MovieContext } from '../../context/movie.context';
import PaymentModal from '../PaymentModal/Payment.component';


const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovies = () => {
        setIsOpen(true);
        setPrice(689);
    };

    return (
        <>
            <PaymentModal  setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-3 md:gap-5 lg:gap-8">
                <div className="flex items-center gap-3 ">
                    <div className="w-30 h-6 lg:w-38 lg:h-7">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premier"
                            className="w-full h-full"
                        />
                    </div>
                    <span className="bg-bms-700 p-1 text-xs text-white rounded-md">Streaming Now</span>
                </div>

                <h1 className="hidden lg:block text-white lg:text-5xl font-bold">
                    {movie.original_title}
                </h1>

                <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">

                    <div className="text-white flex flex-col gap-1 md:gap-3 lg:gap-3 ">
                        <h4>{movie.original_language}</h4>
                        <h4>{(movie.runtime / 60).toFixed(2)} H &bull; {genres} &bull; {movie.adult} &bull; {movie.release_date}</h4>
                    </div>

                    <div className="flex items-center gap-3">
                        <button onClick={rentMovies} className="bg-red-600 w-screen lg:w-52  md:w-screen   py-3 text-white font-semibold rounded-lg">Rent ₹149</button>
                        <button onClick={buyMovies} className="bg-red-600 w-screen lg:w-52  md:w-screen  py-3 text-white font-semibold rounded-lg">Buy ₹689</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MovieInfo;
