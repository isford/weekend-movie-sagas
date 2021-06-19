import React from 'react'
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function AddMovieForm() {
    const genres = useSelector(store => store.genres)
    const history = useHistory();
    const dispatch = useDispatch();
    const [genre, setGenre] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
    }, []);


    const goHome = () => {
        console.log('Cancel button clicked')
        history.push('/')
        //Clear input values on cancel and submit
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Movie Title"></input>
                <input type="text" placeholder="Movie Poster URL"></input>
                <input type="text" placeholder="Movie Description"></input>
                <select name="genres" value={genre} onChange={(event) => setGenre(event.target.value)}>
                    {genres.map(genre => {
                        return (
                            <option key={genre.id}>{genre.name}</option>
                        )
                    })}
                </select>

            </form>
            <h2>TEST DATA</h2>
            <p>TITLE:The Lord of the Rings: The Fellowship of the Ring</p>
            <p>POSTER: https://images-na.ssl-images-amazon.com/images/I/81EBp0vOZZL._AC_SL1329_.jpg</p>
            <p>DESCRIPTION: A meek Hobbit from the Shire
                and eight companions set out on a
                journey to destroy the powerful One Ring
                and save Middle-earth from the Dark Lord Sauron.</p>

            <button onClick={goHome} >Cancel</button>
            <button>Save</button>
        </div>
    )
}
