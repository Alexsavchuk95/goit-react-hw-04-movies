/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import style from './App.module.css';
import HomePage from '../HomePage/HomePage';
import MoviesPage from '../MoviesPage/MoviesPage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import Nav from '../Nav/Nav';

const App = () => {
  return (
    <div className={style.body}>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </div>
  );
};

export default App;
