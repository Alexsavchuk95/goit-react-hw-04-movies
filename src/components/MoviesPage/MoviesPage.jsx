import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';
import SearchForm from './SearchFrom/SearchForm';
import MoviesList from './MovieList/MovieList';

export default class MoviesPage extends Component {
  state = { moviesList: null };

  componentDidMount() {
    const query = this.getQuery();
    if (query) {
      api.getSearch(`query=${query}`).then(data => {
        this.setState({
          moviesList: data,
        });
      });
    }
  }

  getQuery = () => {
    const { search } = this.props.location;
    const searchParams = new URLSearchParams(search);
    return searchParams.get('query');
  };

  handleSearch = query => {
    const { location, history } = this.props;
    if (query) {
      history.push({ ...location, search: `query=${query}` });
      api.getSearch(`query=${query}`).then(data => {
        this.setState({
          moviesList: data,
        });
      });
    }
  };

  render() {
    const { moviesList } = this.state;
    let result;
    if (moviesList) {
      result = (
        <div>
          {moviesList.length > 0 ? (
            <MoviesList moviesList={moviesList} />
          ) : (
            <p>Movies not found</p>
          )}
        </div>
      );
    }
    return (
      <div>
        <SearchForm onSubmit={this.handleSearch} />
        {!!result && result}
      </div>
    );
  }
}

MoviesPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
