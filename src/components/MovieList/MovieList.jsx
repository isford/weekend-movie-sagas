import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router';

function MovieList() {
    const history = useHistory();

    const dispatch = useDispatch();
    //This calls the movie reducer to show movies saved locally
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        //on page load sends dispatch of fetch movies to index
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const goToDetails = () =>{
        console.log('Movie was clicked')
        history.push('/Details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* This maps through the movies array appending them to the DOM */}
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={goToDetails} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;