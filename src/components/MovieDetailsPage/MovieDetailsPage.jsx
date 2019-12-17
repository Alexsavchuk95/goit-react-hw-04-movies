import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Article from './Article';
import AdditionalInfo from '../Additional-information/AdditionalInformation';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import api from '../services/api';

const getIdFromProps = props => props.match.params.movieId;
const getUrlFromProps = props => props.match.url;
const getPathFromProps = props => props.match.path;
const getStateFromProps = props => props.location.state;

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.object,
      }),
    }).isRequired,
  };

  state = {
    article: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    api.fetchItemById(id).then(article => this.setState({ article }));
  }

  onGoBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push('/');
  };

  render() {
    const { article } = this.state;
    const url = getUrlFromProps(this.props);
    const path = getPathFromProps(this.props);
    const state = getStateFromProps(this.props);
    return (
      <div>
        <button type="button" onClick={this.onGoBack}>
          Go back
        </button>
        {article && <Article {...article} />}
        <AdditionalInfo url={url} state={state} />
        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </div>
    );
  }
}
