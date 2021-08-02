import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// ATTENTION BioOptmizer< THIS IS OLD CODE FROM OLD PROJECT

// Create the rootSaga generator function
function* rootSaga() {
    //FETCH movies received on page load from MovieList and runs fetchAllMovies
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    //Gets all genres from DB, and displays in dropdown
    //for selection
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    //POST new movie to DB
    yield takeEvery('ADD_MOVIE', addMovie);
    //gets genre info from DB
    yield takeEvery('GET_ONE_MOVIE', getMovie)
    
}
//generator to GET genre info from DB
function* getMovie(action) {
    try {
        console.log('DA MOVIES IS', action.payload.id)
        //Getting a specific movies genres
       const movieId = yield axios.get(`/api/genre/details/${action.payload.id}`);
       console.log('The movie id is', movieId.data)
       //Sets genres in a local array for access on details page
       yield put ({type:'SET_GENRES', payload: movieId.data});
    }catch{
        console.log('Error in getMovie generator')
    }
}
//generator to to add movie to DB
function* addMovie(action) {
    //payload coming from addMovieForm
    let movie = action.payload;
    console.log('Movie in addMovie generator is', movie)
    try {
        //POST movie to DB
        yield axios.post('/api/movie', movie)
        //UPDATE reducer to current w/ DB
        yield put({ type: 'FETCH_MOVIES' })
    } catch (error) {
        console.log('Error in addMovieGenerator', error)
    }
}
//generator to get all movies from DB
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        //GET request to Movie Router
        const movies = yield axios.get('/api/movie');
        //Console log the array of objects w/ movies inside of it
        console.log('get all movies:', movies.data);
        //Dispatch to movies function in index
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all movies error');
    }

}
//generator to get all genres from DB
function* fetchAllGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data })
    } catch {
        console.log('Get all Genres error')
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Store movies locally in reducer to be called back for DOM render
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//Stores movie data from DOM in a local object to render when
//viewing details
const details = (state = {}, action) => {
    switch(action.type){
        case 'SET_DETAILS' :
            return action.payload
        default :
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        case 'SET_ALL_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
