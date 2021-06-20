import React from 'react'
import {useSelector} from 'react-redux';

export default function Details() {
    //Movie details stored in details reducer
    const movie = useSelector(store => store.details)
    //movie genre stored in genres reducer
    const genres = useSelector(store => store.genres);
    console.log(movie);

    return (
        <div key = {movie.id}>
            <p>{movie.title}</p>
            <img src ={movie.poster}/>
            <p>{movie.description}</p>
            <h5>Genres</h5>
            {/* Map through genres to render on DOM correctly */}
            {genres.map(genre => {
                return(
                    <div key={genre.name}>{genre.name}</div>
                )
            })}
            
        </div>
    )
}
