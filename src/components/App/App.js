import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import '@fontsource/roboto';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from '../Header/Header';
import Home from '../Home/Home';
import RescueStack from '../RescueStack/RescueStack';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';
import Promise from '../Promise/Promise';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f57c00',
    },
    secondary: {
      main: '#8e24aa',
    },
  },
  typography: {
    fontFamily: [
      'Palatino',
      'Georgia',
      'Times New Roman',
      'Times',
      'serif',
    ].join(','),
  },
});

function App() {
  return (
    
    <div className="App">
      {/* <h1>Trick or Cheat</h1> */}
      <Router>
        <ThemeProvider theme={theme}>
        {/* Buttons for navigation */}
        <Header />
        {/* Displays Candy Facts */}
        <Route path="/" exact>
          <Home />
        </Route>
        {/* Displays What the Stack Is */}
        <Route path="/RescueStack">
          <RescueStack />
        </Route>
        {/* Shows Current Offers */}
        <Route path="/Offers">
          <Offers/>
        </Route>
        {/* Shows User Reviews */}
          <Route path="/Testimonials">
            <Testimonials />
          </Route>
        {/* Satisfaction Guarantee */}
          <Route path="/Promise">
            <Promise />
          </Route>
        </ThemeProvider>
      </Router>
    </div>
  );
}


export default App;
