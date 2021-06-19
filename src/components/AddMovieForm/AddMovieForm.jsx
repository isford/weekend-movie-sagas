import React from 'react'

export default function AddMovieForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Movie Title"></input>
                <input type="text" placeholder="Movie Poster URL"></input>
                <input type="text" placeholder="Movie Description"></input>
                <select name="genres" id="genres">
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
            <button>Cancel</button>
            <button>Save</button>
        </div>
    )
}
