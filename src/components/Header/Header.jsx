import React from 'react'
import { useHistory } from 'react-router';

export default function Header() {
const history = useHistory();

const goToNewMovie=()=>{
    console.log('Going to go add a new Movie!');
    history.push('/AddMovieForm')
}

const goHome=()=>{
    console.log('Home button clicked')
    history.push('/')
}

    return (
        <div>
            <button onClick={goHome}>Home</button>
            <button onClick={goToNewMovie}>Add a Movie</button>
        </div>
    )
}
