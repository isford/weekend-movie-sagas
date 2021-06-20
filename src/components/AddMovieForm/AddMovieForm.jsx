import React from 'react'
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function AddMovieForm() {
    //Genres stored in local reducer
    const genres = useSelector(store => store.genres)
    const history = useHistory();
    const dispatch = useDispatch();
    //Local states used to store user input
    const [genreToAdd, setGenreToAdd] = useState(0);
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        //Gets all genres from reducer on Load to map through them in dropdown
        dispatch({ type: 'FETCH_GENRES' })
    }, []);

    //navigates back to home page
    const goHome = () => {
        console.log('Cancel button clicked')
        history.push('/')
        //Clear input values on cancel and submit
    }
    //Object payload sent to addMovie generator
    const movieToAdd = {
        title: title,
        poster: poster,
        description: description,
        genre_id: Number(genreToAdd)
    }
    //Store info in object and send to generator via saga dispatch
    //then navigate to home page
    const saveMovie =() => {
        console.log('Save button clicked!');
        dispatch({type: 'ADD_MOVIE', payload: movieToAdd});
        console.log('The selected Genre was',genreToAdd);
        history.push('/');
        //Need to post data to DB and then navigate back to home
    }
    //Form to collect movie info
    return (
        <div>
            <form>
                <input type="text" placeholder="Movie Title"
                 onChange={(event) => setTitle(event.target.value)}></input>
                <input type="text" placeholder="Movie Poster URL"
                 onChange={(event) => setPoster(event.target.value)}></input>
                <input type="text" placeholder="Movie Description"
                 onChange={(event) => setDescription(event.target.value)}></input>
                {/* Maps through genres to stay current w/ DB */}
                <select name="genres" value={genreToAdd} onChange={(event) => setGenreToAdd(event.target.value)}>
                    {genres.map(genre => {
                        return (
                            <option key={genre.id} value = {genre.id}>{genre.name}</option>
                        )
                    })}
                </select>

            </form>
            <button onClick={goHome} >Cancel</button>
            <button onClick={saveMovie}>Save</button>
        </div>
    )
}
