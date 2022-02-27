import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Autocomplete } from '@mantine/core';
import axios from 'axios';

function Home() {
    const [movieNames, setMovieNames] = useState([])
    const [searchValue, setSearchValue] = useState("");

    const onChangeHandler = async (text) => {
        const response = await axios.get(
            'https://yts.mx/api/v2/list_movies.json?query_term=' + text
        );

        let arrayOfMoviesNames = [];

        response.data.data.movies.forEach(i => {
            arrayOfMoviesNames.push(i.title)
        });

        setMovieNames(arrayOfMoviesNames);
    }

    console.log(movieNames)

    return (
        <div>
            <NavBar />
            <div className='container'>
                <Autocomplete
                    className='autocomplete'
                    placeholder="Pick one"
                    limit={8}
                    data={movieNames}
                    aria-label="search movie"
                    value={searchValue}
                    onChange={(e) => onChangeHandler(e.target.value)}

                    transition="pop-top-left"
                    transitionDuration={80}
                    transitionTimingFunction="ease"
                />
            </div>
        </div>
    )
}

export default Home