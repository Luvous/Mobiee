import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './Home.jsx';
import Browse from './Browse.jsx';
import Movie from './Movie.jsx';

const Routing = () =>{
  return (
    <Router>
        <Routes>
            <Route path='/' element={Home()} />
            <Route path='/search' element={Browse()}/>
            <Route path='/movie' element={Movie()} />
        </Routes>
    </Router>
  )
}

export default Routing;