import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Recette from './pages/Recette'
import CocktailsLetter from './pages/CocktailsLetter'
import FrenchCocktails from './pages/FrenchCocktails'
import CreateCocktail from './pages/CreateCocktail'
import MyCocktails from './pages/MyCocktails'
import App from './App'
import reportWebVitals from './reportWebVitals';
import { StyledLink } from './utils/style/Atoms'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreateCocktail/>Ò
          </Route>
          <Route path="/mycocktails">
            <MyCocktails/>
          </Route>
          <Route path="/frenchcocktails">
            <FrenchCocktails/>
          </Route>
          <Route path="/cocktailsletter/:letter">
            <CocktailsLetter/>
          </Route>
          <Route path="/recette/:recetteId/:randomColor/:origin">
            <Recette/>
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
