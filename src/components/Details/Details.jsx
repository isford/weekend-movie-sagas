import React from 'react'
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

export default function Details() {
    const movie = useSelector(store => store.details)
    const genres = useSelector(store => store.genres);

    return (
        <div key = {movie.id}>
            <p>{movie.title}</p>
            <p>{movie.poster}</p>
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
