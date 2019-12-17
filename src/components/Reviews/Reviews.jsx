import React, { Component } from 'react';
import api from '../services/api';
import ReviewsInfo from './ReviewsInfo';

const getIdFromProps = props => props.match.params.movieId;
export default class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    api.getReviews(id).then(data => {
      this.setState({
        reviews: data.results,
      });
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {!!reviews && reviews.length > 0 && (
          <ul>
            {reviews.map(el => (
              <ReviewsInfo key={el.id} {...el} />
            ))}
          </ul>
        )}
        {!!reviews && reviews.length === 0 && (
          <p>We dont have any reviews for this movie</p>
        )}
      </div>
    );
  }
}
