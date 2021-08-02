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

//MUI Styling Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9CC700',
    },
    secondary: {
      main: '#252525',
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
      {/* Main Logo */}
      <img className="RescueStackImg" src="https://i.imgur.com/86Dcd9t.png" />
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
