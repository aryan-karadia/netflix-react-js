import react, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


const Movie = ({item}) => {
    const [isFavourite, setIsFavourite] = useState(false)
    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-4'>
            <img className='w-full h-auto block object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='h-full flex items-center justify-center text-xs md:text-sm font-bold text-center'>{item?.title}</p>
                <p>
                {isFavourite ? <FaHeart className='text-red-500 absolute top-6 left-6' onClick={() => setIsFavourite(false)}/> : <FaRegHeart className='text-red-500 absolute top-6 left-6' onClick={() => setIsFavourite(true)}/>}
                </p>
            </div>
        </div>
    );
}

export default Movie;