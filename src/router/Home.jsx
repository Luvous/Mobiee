import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Autocomplete } from '@mantine/core';
import axios from 'axios';

function Home() {
    const [movieNames, setMovieNames] = useState([])
    
    let arrayOfMoviesNames = [];

    const loadMovieNames = async (text) => {
        arrayOfMoviesNames = [];
        let dataArray = []
        const response = await axios.get(
            'https://yts.mx/api/v2/list_movies.json?query_term=' + text
        );
        
        if (response.data.data.movies){
            dataArray = response.data.data.movies;
        } else {
            dataArray = []
        }

        if (dataArray.length > 1){
            dataArray.forEach(i => {
                arrayOfMoviesNames.push(i.title_long)
            });   
        }

        setMovieNames(arrayOfMoviesNames);
    }

    return (
        <div>
            <NavBar />
            <div className='container'>
                <Autocomplete
                    className='autocomplete'
                    placeholder="Search a movie ;)"
                    data={movieNames}
                    aria-label="search movie"
                    type="text"
                    onChange={(value) => loadMovieNames(value)}

                    transition="pop-top-left"
                    transitionDuration={80}
                    transitionTimingFunction="ease"
                />
            </div>
        </div>
    )
}

export default Home