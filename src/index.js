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

// Create the rootSaga generator function
function* rootSaga() {
    //FETCH movies received on page load from MovieList and runs fetchAllMovies
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('ADD_GENRE', addGenre);
}

function* addMovie(action) {
    //payload coming from addMovieForm
    let movie = action.payload;
    console.log('Movie in addMovie generator is', movie)
    try{
        //POST movie to DB
        yield axios.post ('/api/movie', {movie})
        //UPDATE reducer to current w/ DB
        yield put({type:'FETCH_MOVIES'})
    }catch(error){
        console.log('Error in addMovieGenerator', error)
    }
}

function* addGenre(action){
    let genre = action.payload;
    console.log('Genre in addGenre generator is', genre);
    try{
        yield axios.post ('/api/genre', {genre});
        yield put({type:'FETCH_GENRES'})
    }catch(error){
        console.log('Error in addGenre generator', error)
    }
}

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

function* fetchAllGenres() {
    try{
        const genres = yield axios.get('/api/genre');
        console.log('get all genres:', genres.data);
        yield put({type: 'SET_GENRES', payload: genres.data})
    }catch{
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

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
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
