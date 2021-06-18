import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import '@fontsource/roboto';

import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header';
import Details from '../Details/Details';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        <Header />
        {/* Displays list of movies on DOM */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/Details">
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route path="/AddMovieForm">
          <AddMovieForm/>
        </Route>
      </Router>
    </div>
  );
}


export default App;
