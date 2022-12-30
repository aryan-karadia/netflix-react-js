import react, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const scrollLeft = () => {
        const slider = document.getElementById('slider' + rowID)
        slider.scrollLeft -= 1108
    }

    const scrollRight = () => {
        const slider = document.getElementById('slider' + rowID)
        slider.scrollLeft += 1108
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-2'>{title}</h2>
            <div className='relative flex items-center group'>
                <FaChevronLeft
                    onClick={scrollLeft}
                 size={40} className='text-white absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movie item={item} key={id} />
                    ))}
                </div>
                <FaChevronRight onClick={scrollRight} size={40} className='text-white absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block' />
            </div>
        </>
    )
}

export default Row