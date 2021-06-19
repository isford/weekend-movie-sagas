import React from 'react'
import { useHistory } from 'react-router';
import {useState} from 'react'

export default function AddMovieForm() {

    const history = useHistory();
    const [genre, setGenre] = useState(0);
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
                <select name="genres" id="genres" onChange={(event) => setGenre(event.target.value)}>
                    <option value ="0">Select A Genre</option>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
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
