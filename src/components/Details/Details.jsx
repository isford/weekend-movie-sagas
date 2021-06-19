import React from 'react'
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

export default function Details() {
    const movie = useSelector(store => store.details)
    const genres = useSelector(store => store.genres);
    console.log(movie);

    return (
        <div key = {movie.id}>
            <p>{movie.title}</p>
            <img src ={movie.poster}/>
            <p>{movie.description}</p>
            <h5>Genres</h5>
            {genres.map(genre => {
                return(
                    <div key={genre.name}>{genre.name}</div>
                )
            })}
            
        </div>
    )
}
