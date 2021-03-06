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

    
    const captureDetails= (movie) =>{
        console.log('The selected movie was', movie)
        //collects info from movie and stores locally
        dispatch({ type: 'SET_DETAILS', payload: movie })
        //gets genre info from DB
        dispatch({type: 'GET_ONE_MOVIE', payload: {id: movie.id}})
        //navigates to details page
        history.push(`/Details`);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
            {/* maps through reducer to display movies on DOM */}
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={ () => captureDetails(movie)} src={movie.poster} 
                            alt={movie.title} movie = {movie}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;