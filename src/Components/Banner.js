import React, { useState, useEffect } from 'react'
import axios from '../Requests/axios';
import '../CSS/Banner.css';

function Banner({fetchBanner}) {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchBanner);
            
            let finalResult = request.data.results
            let random = Math.floor(Math.random() * finalResult.length - 1);

            setMovie(finalResult[random]);
            return request;
        }
        fetchData();
    }, [fetchBanner]);

    function truncate (str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
 
    <div>
        <header
            className='banner banner__image'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}>
            <div
                className='banner__contents'>
                    <h1 className='banner__title'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className='banner__buttons'>
                        <button className='banner__button'>Play</button>
                        <button className='banner__button'>My List</button>
                    </div>
                    <h1 className='banner__description'>
                        {truncate(movie?.overview, 150)}
                    </h1>
            </div>
            <div className='banner__fadeBottom'/>
        </header>
    </div>
  )
}

export default Banner;